import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js'

import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'

// ---------------- CONFIGURACIÓN BVH ----------------
THREE.Mesh.prototype.raycast = acceleratedRaycast
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree

// Variable global para el Modo Invitado/Visor
let isViewOnly = false 

function _idle(cb) {
  if (typeof requestIdleCallback !== 'undefined') requestIdleCallback(() => cb(), { timeout: 1200 })
  else setTimeout(cb, 0)
}

let _interferenceRunId = 0
let _preciseTimer = null

function ensureBVH(mesh) {
  const geo = mesh?.geometry
  if (!geo) return
  if (geo.boundsTree) { mesh.userData._bvhReady = true; return }
  if (mesh.userData._bvhBuilding) return
  
  mesh.userData._bvhBuilding = true
  _idle(() => {
    try {
      geo.computeBoundsTree({ maxLeafTris: 10 })
      mesh.userData._bvhReady = true
    } catch (e) { mesh.userData._bvhReady = false } 
    finally { mesh.userData._bvhBuilding = false }
  })
}

function schedulePreciseInterferenceCheck(runId, delay = 0) {
  if (_preciseTimer) clearTimeout(_preciseTimer)
  _preciseTimer = setTimeout(() => {
    _idle(() => {
      if (runId !== _interferenceRunId) return
      checkInterferencesPrecise(runId)
    })
  }, delay)
}

// Escaneo automático al cargar modelos
let _interferenceTimer = null
function scheduleInterferenceCheck(delay = 150) {
  if (_interferenceTimer) clearTimeout(_interferenceTimer)
  _interferenceRunId++
  const runId = _interferenceRunId

  _interferenceTimer = setTimeout(() => {
    const visibleMeshes = modelsGroup.children.filter(m => m.visible)
    if (visibleMeshes.length < 2) return
    try {
      checkInterferences() // Escaneo rápido (Lanza el aviso si chocan)
      schedulePreciseInterferenceCheck(runId, 0) // Escaneo preciso de fondo
    } catch (e) {}
  }, delay)
}

// ---------------- TOAST DE AVISO ----------------
let wasColliding = false
let collisionToastEl = null
let collisionToastTimer = null

function ensureCollisionToast() {
  if (collisionToastEl) return
  collisionToastEl = document.createElement("div")
  collisionToastEl.id = "collisionToast"
  collisionToastEl.style.cssText = `
    position: fixed; top: 14px; right: 14px; z-index: 9999;
    background: #cc3333; color: white; padding: 12px 16px;
    border-radius: 8px; font-size: 13px; font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3); opacity: 0;
    transform: translateY(-6px); transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  `
  document.body.appendChild(collisionToastEl)
}

function showCollisionToast(message = "⚠️ Colisión detectada", duration = 1800) {
  ensureCollisionToast()
  collisionToastEl.innerHTML = message
  collisionToastEl.style.opacity = "0"
  collisionToastEl.style.transform = "translateY(-6px)"
  requestAnimationFrame(() => {
    collisionToastEl.style.opacity = "1"
    collisionToastEl.style.transform = "translateY(0)"
  })
  if (collisionToastTimer) clearTimeout(collisionToastTimer)
  collisionToastTimer = setTimeout(() => {
    collisionToastEl.style.opacity = "0"
    collisionToastEl.style.transform = "translateY(-6px)"
  }, duration)
}

// ---------------- DOM ELEMENTS ----------------
const canvas = document.getElementById('canvas')
const dropOverlay = document.getElementById('drop')
const fileInput = document.getElementById('fileInput')

const btnLoad = document.getElementById('btnLoad')
const btnTheme = document.getElementById('btnTheme')
const btnScreenshot = document.getElementById('btnScreenshot')
const btnAlign = document.getElementById('btnAlign')

const countEl = document.getElementById('count')
const modelsListEl = document.getElementById('modelsList')
const panelSubEl = document.getElementById('panelSub')

const btnViewOclusal = document.getElementById('viewOclusal')
const btnViewFrontal = document.getElementById('viewFrontal')
const btnViewLatD = document.getElementById('viewLatD')
const btnViewLatI = document.getElementById('viewLatI')
const btnViewInferior = document.getElementById('viewInferior')

const btnMeasure = document.getElementById('btnMeasure')
const btnClearMeasures = document.getElementById('btnClearMeasures')
const measureHint = document.getElementById('measureHint')
const measureListEl = document.getElementById('measureList')

const btnInterference = document.getElementById('btnInterference')
const interferencePanel = document.getElementById('interferencePanel')
const severityFilter = document.getElementById('severityFilter')

const btnShare = document.getElementById('btnShare')
const shareModal = document.getElementById('shareModal')
const closeModal = document.getElementById('closeModal')
const shareStatus = document.getElementById('shareStatus')
const shareResult = document.getElementById('shareResult')
const shareLinkInput = document.getElementById('shareLink')
const btnCopyLink = document.getElementById('btnCopyLink')

const alignPanel = document.getElementById('alignPanel')
const alignInstructions = document.getElementById('alignInstructions')
const btnCancelAlign = document.getElementById('btnCancelAlign')

let theme = 'dark'
document.documentElement.dataset.theme = theme
btnTheme.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme
  btnTheme.innerHTML = theme === 'dark' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
})

// ---------------- THREE.JS SETUP ----------------
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1e1e1e)

const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 5000)
camera.position.set(0, 60, 140)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.08

scene.add(new THREE.HemisphereLight(0xffffff, 0x223355, 0.9))
const dir = new THREE.DirectionalLight(0xffffff, 0.95)
dir.position.set(80, 140, 60)
scene.add(dir)

const fill = new THREE.DirectionalLight(0xffffff, 0.22)
fill.position.set(-40, -120, -20)
scene.add(fill)

const grid = new THREE.GridHelper(200, 20, 0x3e3e42, 0x3e3e42)
grid.material.opacity = 0.4
grid.material.transparent = true
scene.add(grid)

const modelsGroup = new THREE.Group()
scene.add(modelsGroup)

const stlLoader = new STLLoader()
const objLoader = new OBJLoader()
const plyLoader = new PLYLoader()
let idCounter = 1

// ---------------- ALINEACIÓN POR PUNTOS ----------------
let alignMode = false
let alignRefPoints = []
let alignTarPoints = []
let alignRefMesh = null
let alignTarMesh = null

const alignGroup = new THREE.Group()
scene.add(alignGroup)

function setAlignMode(active) {
  alignMode = active
  btnAlign.classList.toggle('active', active)
  alignPanel.style.display = active ? 'block' : 'none'
  
  if (!active) {
    alignRefPoints = []; alignTarPoints = []; alignRefMesh = null; alignTarMesh = null
    while(alignGroup.children.length > 0) {
      const child = alignGroup.children.pop(); child.geometry.dispose(); child.material.dispose()
    }
  } else {
    alignInstructions.innerHTML = `Haz click en el <b>1º punto</b> del modelo de Referencia`
  }
}

function addAlignMarker(pos, colorHex) {
  const geo = new THREE.SphereGeometry(1.2, 16, 16)
  const mat = new THREE.MeshBasicMaterial({ color: colorHex, depthTest: false, transparent: true, opacity: 0.9 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.copy(pos)
  alignGroup.add(mesh)
}

function handleAlignClick(hit) {
  const p = hit.point.clone()
  const mesh = hit.object

  if (alignRefPoints.length < 3) {
    if (alignRefPoints.length === 0) alignRefMesh = mesh
    else if (mesh !== alignRefMesh) { showCollisionToast("⚠️ Selecciona en el MISMO modelo", 2500); return }
    
    alignRefPoints.push(p); addAlignMarker(p, 0xff3333)
    if (alignRefPoints.length === 3) alignInstructions.innerHTML = "Haz click en los <b>mismos 3 puntos</b> del modelo a MOVER"
    else alignInstructions.innerHTML = `Punto <b>${alignRefPoints.length + 1}/3</b> en el modelo REFERENCIA`
  } 
  else if (alignTarPoints.length < 3) {
    if (alignTarPoints.length === 0) {
      if (mesh === alignRefMesh) { showCollisionToast("⚠️ Selecciona el OTRO modelo para moverlo", 2500); return }
      alignTarMesh = mesh
    } else if (mesh !== alignTarMesh) { showCollisionToast("⚠️ Selecciona en el MISMO modelo", 2500); return }
    
    alignTarPoints.push(p); addAlignMarker(p, 0x3388ff)
    if (alignTarPoints.length === 3) {
       try { executeAlignment() } 
       catch (e) { showCollisionToast("❌ Error. Intenta con puntos más separados.", 3000); setAlignMode(false) }
    } else {
       alignInstructions.innerHTML = `Punto <b>${alignTarPoints.length + 1}/3</b> en el modelo a MOVER`
    }
  }
}

function executeAlignment() {
  function getBasis(p0, p1, p2) {
    const x = new THREE.Vector3().subVectors(p1, p0).normalize()
    const v = new THREE.Vector3().subVectors(p2, p0)
    const z = new THREE.Vector3().crossVectors(x, v).normalize()
    const y = new THREE.Vector3().crossVectors(z, x).normalize()
    const m = new THREE.Matrix4().makeBasis(x, y, z)
    m.setPosition(p0)
    return m
  }

  const refMat = getBasis(alignRefPoints[0], alignRefPoints[1], alignRefPoints[2])
  const tarMat = getBasis(alignTarPoints[0], alignTarPoints[1], alignTarPoints[2])
  
  const transform = new THREE.Matrix4().multiplyMatrices(refMat, tarMat.invert())
  alignTarMesh.geometry.applyMatrix4(transform)
  alignTarMesh.geometry.computeVertexNormals()
  alignTarMesh.geometry.disposeBoundsTree()
  ensureBVH(alignTarMesh)
  
  showCollisionToast("✅ Modelos alineados correctamente", 3000)
  scheduleInterferenceCheck(800)
  setAlignMode(false)
}

btnAlign.addEventListener('click', () => {
  if (measureMode) setMeasureMode(false)
  setAlignMode(!alignMode)
})
btnCancelAlign.addEventListener('click', () => setAlignMode(false))

// ---------------- SELECCIÓN Y UI ----------------
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
let selectedMesh = null
const rowById = new Map()

function setRowSelected(mesh, on) { const row = rowById.get(mesh?.userData?.id); if (row) row.classList.toggle('selected', !!on) }

function applySelectedVisual(mesh, on) {
  if (!mesh || !mesh.material) return
  if (!mesh.userData._orig) mesh.userData._orig = { emissive: mesh.material.emissive ? mesh.material.emissive.clone() : new THREE.Color(0x000000), emissiveIntensity: mesh.material.emissiveIntensity ?? 0 }
  if (!mesh.material.emissive) mesh.material.emissive = new THREE.Color(0x000000)

  if (on) { mesh.material.emissive.setHex(0x007acc); mesh.material.emissiveIntensity = 0.3 } 
  else { mesh.material.emissive.copy(mesh.userData._orig.emissive); mesh.material.emissiveIntensity = mesh.userData._orig.emissiveIntensity }
}

function refreshRowToggleButton(mesh) {
  const row = rowById.get(mesh.userData.id); if (!row) return
  const btnToggle = row.querySelector('[data-action="toggle"]'); if (!btnToggle) return
  if (mesh.visible) {
    btnToggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
    btnToggle.classList.remove('ghost')
  } else {
    btnToggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
    btnToggle.classList.add('ghost')
  }
}

function selectMesh(mesh) {
  if (selectedMesh === mesh) return
  if (selectedMesh) { applySelectedVisual(selectedMesh, false); setRowSelected(selectedMesh, false) }
  selectedMesh = mesh
  if (selectedMesh) { applySelectedVisual(selectedMesh, true); setRowSelected(selectedMesh, true); const row = rowById.get(selectedMesh.userData.id); if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' }) }
}

function clearSelection() { if (!selectedMesh) return; applySelectedVisual(selectedMesh, false); setRowSelected(selectedMesh, false); selectedMesh = null }

function setMeshOpacity(mesh, opacity01) {
  if (!mesh?.material) return
  const o = Math.max(0.05, Math.min(1, opacity01))
  mesh.material.opacity = o; mesh.material.transparent = o < 0.999; mesh.material.depthWrite = o >= 0.999; mesh.material.needsUpdate = true; mesh.userData.opacity = o
}

const COLOR_PRESETS = [
  { name: 'Original', hex: 0xcfd8ff }, { name: 'Blanco', hex: 0xffffff }, { name: 'Amarillo', hex: 0xffd400 },
  { name: 'Rojo', hex: 0xff3b3b }, { name: 'Verde', hex: 0x34d399 }, { name: 'Azul', hex: 0x3b82f6 },
  { name: 'Morado', hex: 0xa855f7 }, { name: 'Naranja', hex: 0xfb923c }
]

function setMeshColor(mesh, hex) {
  if (!mesh?.material) return
  if (mesh.userData.baseColorHex == null) mesh.userData.baseColorHex = mesh.material.color?.getHex?.() ?? 0xcfd8ff
  mesh.material.color.setHex(hex); mesh.userData.colorHex = hex
}

// ---------------- EL MOTOR DE INTERFERENCIAS ----------------
let interferenceMode = false
const interferenceResults = new Map()
const interferenceMarkersGroup = new THREE.Group()
scene.add(interferenceMarkersGroup)

let allInterferenceData = []
let currentSeverityFilter = 'all'
const INTERFERENCE_SEVERITY = { LEVE: 0.0, MODERADA: 0.5, GRAVE: 1.0 }

function createCircleTexture() {
  const canvas = document.createElement('canvas'); canvas.width = 64; canvas.height = 64; const context = canvas.getContext('2d')
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255, 50, 50, 1)'); gradient.addColorStop(0.75, 'rgba(255, 50, 50, 1)'); gradient.addColorStop(1, 'rgba(255, 50, 50, 0)')
  context.fillStyle = gradient; context.beginPath(); context.arc(32, 32, 32, 0, Math.PI * 2); context.fill()
  return new THREE.CanvasTexture(canvas)
}
const collisionDotTexture = createCircleTexture()

// 1. ESCANEO RÁPIDO
function checkInterferences() {
  interferenceResults.clear()
  clearInterferenceMarkers()
  allInterferenceData = []
  
  const meshes = modelsGroup.children.filter(m => m.visible)
  if (meshes.length < 2) return

  for (let i = 0; i < meshes.length; i++) {
    for (let j = i + 1; j < meshes.length; j++) {
      const meshA = meshes[i], meshB = meshes[j]
      const boxA = new THREE.Box3().setFromObject(meshA), boxB = new THREE.Box3().setFromObject(meshB)

      if (!boxA.intersectsBox(boxB)) continue
      const interferenceData = findInterferencePoints(meshA, meshB)

      if (interferenceData.points.length > 0) {
        let maxDepthForThisPair = 0
        interferenceData.depths.forEach(d => { if (d > maxDepthForThisPair) maxDepthForThisPair = d })

        allInterferenceData.push(...interferenceData.points.map((p, idx) => ({ point: p, depth: interferenceData.depths[idx], meshA: meshA.userData.id, meshB: meshB.userData.id })))

        if (!interferenceResults.has(meshA.userData.id)) interferenceResults.set(meshA.userData.id, { hasInterference: true, intersectsWith: [], pointCount: 0, maxDepth: 0 })
        let resA = interferenceResults.get(meshA.userData.id)
        resA.intersectsWith.push(meshB.userData.id); resA.pointCount += interferenceData.points.length
        if (maxDepthForThisPair > resA.maxDepth) resA.maxDepth = maxDepthForThisPair

        if (!interferenceResults.has(meshB.userData.id)) interferenceResults.set(meshB.userData.id, { hasInterference: true, intersectsWith: [], pointCount: 0, maxDepth: 0 })
        let resB = interferenceResults.get(meshB.userData.id)
        resB.intersectsWith.push(meshA.userData.id); resB.pointCount += interferenceData.points.length
        if (maxDepthForThisPair > resB.maxDepth) resB.maxDepth = maxDepthForThisPair
      }
    }
  }

  meshes.forEach(mesh => {
    if (!interferenceResults.has(mesh.userData.id)) interferenceResults.set(mesh.userData.id, { hasInterference: false, intersectsWith: [], pointCount: 0, maxDepth: 0 })
  })

  if(interferenceMode) { applySeverityFilter(currentSeverityFilter); updateInterferenceBadges() }
  
  const hasModerateOrSevere = allInterferenceData.some(d => d.depth >= INTERFERENCE_SEVERITY.MODERADA)
  if (hasModerateOrSevere && !wasColliding && !interferenceMode) showCollisionToast("⚠️ Atención: Colisión detectada")
  wasColliding = hasModerateOrSevere
}

function findInterferencePoints(meshA, meshB) {
  const points = [], depths = []
  meshA.updateMatrixWorld(true); meshB.updateMatrixWorld(true)

  const posA = meshA.geometry.attributes.position, posB = meshB.geometry.attributes.position
  const NEAR = 1.5, boxB = new THREE.Box3().setFromObject(meshB)
  boxB.expandByScalar(0.5)

  const vertexA = new THREE.Vector3(), vertexB = new THREE.Vector3()
  const stepA = Math.max(1, Math.floor(posA.count / 500)), stepB = Math.max(1, Math.floor(posB.count / 500))
  
  for (let i = 0; i < posA.count; i += stepA) {
    vertexA.fromBufferAttribute(posA, i).applyMatrix4(meshA.matrixWorld)
    if (!boxB.containsPoint(vertexA)) continue
    let minDistForVertex = Infinity
    for (let j = 0; j < posB.count; j += stepB) {
      vertexB.fromBufferAttribute(posB, j).applyMatrix4(meshB.matrixWorld)
      const distance = vertexA.distanceTo(vertexB)
      if (distance < NEAR) minDistForVertex = Math.min(minDistForVertex, distance)
    }
    
    if (minDistForVertex < NEAR) {
      if (!isPointInsideMesh(vertexA, meshB)) continue
      points.push(vertexA.clone()); depths.push(NEAR - minDistForVertex)
    }
  }
  return { points, depths }
}

// 2. ESCANEO PRECISO
function findInterferencePointsPrecise(meshA, meshB) {
  const points = [], depths = []
  meshA.updateMatrixWorld(true); meshB.updateMatrixWorld(true)

  const geoA = meshA.geometry, geoB = meshB.geometry
  if (!geoA?.attributes?.position || !geoB?.boundsTree) return { points, depths }

  const NEAR = 1.5, boxB = new THREE.Box3().setFromObject(meshB)
  boxB.expandByScalar(0.5)

  const posA = geoA.attributes.position, idxA = geoA.index
  const hasIndex = !!idxA
  const triCount = hasIndex ? idxA.count / 3 : posA.count / 3

  const maxVertexSamples = 900, maxTriSamples = 900
  const stepV = Math.max(1, Math.floor(posA.count / maxVertexSamples))
  const stepT = Math.max(1, Math.floor(triCount / maxTriSamples))

  const pWorld = new THREE.Vector3(), pLocalB = new THREE.Vector3()
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3()
  const closestLocal = new THREE.Vector3(), closestWorld = new THREE.Vector3()
  const invB = new THREE.Matrix4().copy(meshB.matrixWorld).invert()

  function distToB_World(pointWorld) {
    pLocalB.copy(pointWorld).applyMatrix4(invB)
    geoB.boundsTree.closestPointToPoint(pLocalB, closestLocal)
    closestWorld.copy(closestLocal).applyMatrix4(meshB.matrixWorld)
    return pointWorld.distanceTo(closestWorld)
  }

  for (let i = 0; i < posA.count; i += stepV) {
    pWorld.fromBufferAttribute(posA, i).applyMatrix4(meshA.matrixWorld)
    if (!boxB.containsPoint(pWorld)) continue
    const d = distToB_World(pWorld)
    if (d < NEAR) { points.push(pWorld.clone()); depths.push(NEAR - d) }
  }

  for (let t = 0; t < triCount; t += stepT) {
    let i0, i1, i2
    if (hasIndex) { i0 = idxA.getX(t * 3 + 0); i1 = idxA.getX(t * 3 + 1); i2 = idxA.getX(t * 3 + 2) } 
    else { i0 = t * 3 + 0; i1 = t * 3 + 1; i2 = t * 3 + 2 }

    a.fromBufferAttribute(posA, i0).applyMatrix4(meshA.matrixWorld)
    b.fromBufferAttribute(posA, i1).applyMatrix4(meshA.matrixWorld)
    c.fromBufferAttribute(posA, i2).applyMatrix4(meshA.matrixWorld)

    pWorld.copy(a).add(b).add(c).multiplyScalar(1 / 3)
    if (!boxB.containsPoint(pWorld)) continue

    const d = distToB_World(pWorld)
    if (d < NEAR) { points.push(pWorld.clone()); depths.push(NEAR - d) }
  }
  return { points, depths }
}

function checkInterferencesPrecise(runId) {
  if (runId !== _interferenceRunId) return
  const meshes = modelsGroup.children.filter(m => m.visible)
  if (meshes.length < 2) return

  for (const m of meshes) { ensureBVH(m); if (!m.geometry?.boundsTree) return }

  const tmpResults = new Map(), tmpData = []
  for (let i = 0; i < meshes.length; i++) {
    for (let j = i + 1; j < meshes.length; j++) {
      if (runId !== _interferenceRunId) return
      const meshA = meshes[i], meshB = meshes[j]
      const boxA = new THREE.Box3().setFromObject(meshA), boxB = new THREE.Box3().setFromObject(meshB)
      if (!boxA.intersectsBox(boxB)) continue

      const d1 = findInterferencePointsPrecise(meshA, meshB), d2 = findInterferencePointsPrecise(meshB, meshA)
      const points = [...d1.points, ...d2.points], depths = [...d1.depths, ...d2.depths]

      if (points.length > 0) {
        let maxDepthForThisPair = 0
        depths.forEach(d => { if (d > maxDepthForThisPair) maxDepthForThisPair = d })
        tmpData.push(...points.map((p, idx) => ({ point: p, depth: depths[idx] ?? 0, meshA: meshA.userData.id, meshB: meshB.userData.id })))
        
        if (!tmpResults.has(meshA.userData.id)) tmpResults.set(meshA.userData.id, { hasInterference: true, intersectsWith: [], pointCount: 0, maxDepth: 0 })
        let resA = tmpResults.get(meshA.userData.id)
        resA.intersectsWith.push(meshB.userData.id); resA.pointCount += points.length
        if (maxDepthForThisPair > resA.maxDepth) resA.maxDepth = maxDepthForThisPair

        if (!tmpResults.has(meshB.userData.id)) tmpResults.set(meshB.userData.id, { hasInterference: true, intersectsWith: [], pointCount: 0, maxDepth: 0 })
        let resB = tmpResults.get(meshB.userData.id)
        resB.intersectsWith.push(meshA.userData.id); resB.pointCount += points.length
        if (maxDepthForThisPair > resB.maxDepth) resB.maxDepth = maxDepthForThisPair
      }
    }
  }

  if (tmpData.length === 0) return

  interferenceResults.clear()
  tmpResults.forEach((v, k) => interferenceResults.set(k, v))
  allInterferenceData = tmpData

  if (interferenceMode) { clearInterferenceMarkers(); visualizeInterferencePoints(allInterferenceData.map(d => d.point)); updateInterferenceBadges(); applySeverityFilter(currentSeverityFilter) }
}

const _insideRayDir = new THREE.Vector3(1, 0.123, 0.456).normalize()
const _insideTmpOrigin = new THREE.Vector3()
const _insideRaycaster = new THREE.Raycaster()
function isPointInsideMesh(pointWorld, mesh) {
  _insideTmpOrigin.copy(pointWorld).addScaledVector(_insideRayDir, 1e-4)
  _insideRaycaster.set(_insideTmpOrigin, _insideRayDir)
  _insideRaycaster.near = 0; _insideRaycaster.far = 1e6
  const hits = _insideRaycaster.intersectObject(mesh, true)
  return (hits.length % 2) === 1
}

function applySeverityFilter(filterValue) {
  currentSeverityFilter = filterValue
  if (!interferenceMode || allInterferenceData.length === 0) return
  clearInterferenceMarkers()
  let filteredData = allInterferenceData
  if (filterValue === 'critical') filteredData = allInterferenceData.filter(d => d.depth > 1.0)
  else if (filterValue === 'moderate') filteredData = allInterferenceData.filter(d => d.depth >= 0.5 && d.depth <= 1.0)
  else if (filterValue === 'light') filteredData = allInterferenceData.filter(d => d.depth < 0.5)
  if (filteredData.length > 0) visualizeInterferencePoints(filteredData.map(d => d.point))
}

function visualizeInterferencePoints(points) {
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(points.length * 3)
  points.forEach((point, i) => { positions[i * 3] = point.x; positions[i * 3 + 1] = point.y; positions[i * 3 + 2] = point.z })
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0xff2222, size: 4.5, map: collisionDotTexture, transparent: true, opacity: 0.85, depthTest: false, sizeAttenuation: true, blending: THREE.AdditiveBlending
  })
  interferenceMarkersGroup.add(new THREE.Points(geometry, material))
}

function clearInterferenceMarkers() { while (interferenceMarkersGroup.children.length > 0) { const obj = interferenceMarkersGroup.children.pop(); obj.geometry?.dispose(); obj.material?.dispose() } }

function clearInterferenceMode() {
  interferenceMode = false; btnInterference.classList.remove('active'); interferencePanel.style.display = 'none'
  clearInterferenceMarkers(); interferenceResults.clear(); allInterferenceData = []; currentSeverityFilter = 'all'; severityFilter.value = 'all'; updateInterferenceBadges()
}

function updateInterferenceBadges() {
  modelsGroup.children.forEach(mesh => {
    const row = rowById.get(mesh.userData.id)
    if (!row) return
    const oldBadge = row.querySelector('.interferenceBadge')
    if (oldBadge) oldBadge.remove()
    if (!interferenceMode) return

    const result = interferenceResults.get(mesh.userData.id)
    if (!result) return

    const badge = document.createElement('div')
    badge.className = `interferenceBadge ${result.hasInterference ? 'hasInterference' : 'noInterference'}`
    if (result.hasInterference) badge.innerHTML = `🔴 Máx: ${result.maxDepth.toFixed(2)} mm`
    else badge.innerHTML = `🟢 OK`

    const rowTitle = row.querySelector('.rowTitle')
    if (rowTitle) rowTitle.parentNode.insertBefore(badge, rowTitle.nextSibling)
  })
}

// ---------------- MEDICIÓN ----------------
let measureMode = false
let measureFirstPoint = null
const measureGroup = new THREE.Group()
scene.add(measureGroup)

const measurePointMat = new THREE.MeshBasicMaterial({ color: 0x007acc })
const measureLineMat = new THREE.LineBasicMaterial({ color: 0x007acc, linewidth: 2 })

function setMeasureMode(on) {
  measureMode = !!on
  btnMeasure.classList.toggle('active', measureMode)
  measureHint.classList.toggle('show', measureMode)
  if (!measureMode) measureFirstPoint = null
}

function clearMeasures() {
  measureFirstPoint = null
  while (measureGroup.children.length) {
    const obj = measureGroup.children.pop(); obj.geometry?.dispose?.(); if (obj.material?.map) obj.material.map.dispose?.(); obj.material?.dispose?.()
  }
  if (measureListEl) measureListEl.innerHTML = ''
}

function makeTextSprite(text) {
  const c = document.createElement('canvas'); 
  const ctx = c.getContext('2d'); 
  c.width = 400; // Aumentamos un poco el ancho del lienzo para que quepa el texto más grande
  c.height = 120;
  
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.shadowColor = 'rgba(0,0,0,0.8)'; 
  ctx.shadowBlur = 6; 
  ctx.shadowOffsetX = 2; 
  ctx.shadowOffsetY = 2;
  
  ctx.fillStyle = '#ffffff'; 
  // Subimos a 80px para que el número sea mucho más visible
  ctx.font = 'bold 60px system-ui, sans-serif'; 
  ctx.textAlign = 'center'; 
  ctx.textBaseline = 'middle';
  ctx.fillText(text, c.width / 2, c.height / 2);

  // Devolvemos el Sprite con una escala mayor (30 en lugar de 15)
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ 
    map: new THREE.CanvasTexture(c), 
    transparent: true, 
    depthTest: false 
  }));
  
  sprite.scale.set(10, 5, 1); // <--- Aquí es donde realmente crece en pantalla
  return sprite;
}

function addMeasureToList(mmText, a, b) {
  const item = document.createElement('div'); item.className = 'measureItem'; item.textContent = `📏 ${mmText}`
  item.addEventListener('click', () => { viewOnBox(new THREE.Box3().setFromCenterAndSize(new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5), new THREE.Vector3(20, 20, 20)), new THREE.Vector3(0, 0, 1)) })
  measureListEl.prepend(item)
}

function addMeasurePoint(pos) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), measurePointMat); m.position.copy(pos); measureGroup.add(m); return m }
function addMeasureLine(a, b) { const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), measureLineMat); measureGroup.add(line); return line }
function addMeasureLabel(a, b, text) { const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5); const spr = makeTextSprite(text); spr.position.copy(mid); spr.position.y += Math.max(0.8, a.distanceTo(b) * 0.03); measureGroup.add(spr); return spr }

// ---------------- CLICKS EN CANVAS ----------------
canvas.addEventListener('pointerdown', (e) => {
  if (measureMode) return
  const rect = canvas.getBoundingClientRect()
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(modelsGroup.children.filter(m => m.visible), false)

  if (alignMode) { if (!hits.length) return; handleAlignClick(hits[0]); return }
  if (!hits.length) clearSelection(); else selectMesh(hits[0].object)
})

canvas.addEventListener('dblclick', (e) => {
  if (!measureMode) return
  const rect = canvas.getBoundingClientRect()
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(modelsGroup.children.filter(m => m.visible), false)
  if (!hits.length) return

  const p = hits[0].point.clone()
  if (!measureFirstPoint) { measureFirstPoint = p; addMeasurePoint(p); return }
  const a = measureFirstPoint, b = p
  addMeasurePoint(b); addMeasureLine(a, b)
  const txt = `${a.distanceTo(b).toFixed(2)} mm`
  addMeasureLabel(a, b, txt); addMeasureToList(txt, a, b)
  measureFirstPoint = null
})

// ---------------- FUNCIONES ----------------
function resize() { const w = canvas.clientWidth, h = canvas.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix() }
window.addEventListener('resize', resize)
function setCount() { const n = modelsGroup.children.length; countEl.textContent = `${n} modelo${n === 1 ? '' : 's'} cargado${n === 1 ? '' : 's'}` }
function fitToModels() {
  const box = new THREE.Box3().setFromObject(modelsGroup)
  if (box.isEmpty()) return
  const size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3()), maxDim = Math.max(size.x, size.y, size.z)
  camera.position.set(center.x, center.y + maxDim * 0.3, center.z + (maxDim / 2) / Math.tan(camera.fov * Math.PI / 360) * 1.8)
  controls.target.copy(center); controls.update()
}
function viewOnBox(box, direction) {
  if (!box || box.isEmpty()) return
  const center = box.getCenter(new THREE.Vector3()), maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray())
  camera.position.copy(center.clone().add(direction.multiplyScalar(maxDim * 1.8)))
  controls.target.copy(center); controls.update()
}
function getActiveBox() { return new THREE.Box3().setFromObject(selectedMesh || modelsGroup) }

btnViewOclusal.addEventListener('click', () => viewOnBox(getActiveBox(), new THREE.Vector3(0, 1, 0)))
btnViewInferior.addEventListener('click', () => viewOnBox(getActiveBox(), new THREE.Vector3(0, -1, 0)))
btnViewFrontal.addEventListener('click', () => viewOnBox(getActiveBox(), new THREE.Vector3(0, 0, 1)))
btnViewLatD.addEventListener('click', () => viewOnBox(getActiveBox(), new THREE.Vector3(1, 0, 0)))
btnViewLatI.addEventListener('click', () => viewOnBox(getActiveBox(), new THREE.Vector3(-1, 0, 0)))

// ---------------- LISTA MODELOS HTML ----------------
function shortName(name, max = 22) { return name.length > max ? name.slice(0, max - 3) + '...' : name }

function createRow(mesh) {
  const row = document.createElement('div'); row.className = 'modelRow'; row.dataset.id = mesh.userData.id
  const initialPct = Math.round((mesh.userData.opacity ?? 1) * 100)

  row.innerHTML = `
    <div class="rowTitle">
      <div class="name" title="${mesh.userData.name}">${shortName(mesh.userData.name)}</div>
      <div class="rowActions">
        <button class="iconBtn small" type="button" data-action="toggle" title="Ocultar/Mostrar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
        <button class="iconBtn small danger" type="button" data-action="delete" title="Borrar del visor">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
    <div class="meta">${mesh.geometry.attributes.position.count.toLocaleString()} vértices</div>

    <div class="rowOpacity">
      <div class="rowOpacityLabel">
        <span>Transparencia</span>
        <span class="opacityVal" data-opacity-val>${initialPct}%</span>
      </div>
      <input class="opacityRange" type="range" min="5" max="100" value="${initialPct}" data-action="opacity" />
    </div>

    <div class="colorDropdown">
      <button class="btnColor" type="button" data-action="color-dropdown">
        <span class="colorIndicator" data-color-indicator style="background:#cfd8ff"></span>
        Color Material
      </button>
      <div class="colorMenu" data-color-menu>
        ${COLOR_PRESETS.map(c => `
          <button class="colorOption" type="button" data-action="color" data-hex="${c.hex}">
            <span class="colorDot" style="background:#${c.hex.toString(16).padStart(6,'0')}"></span>
            <span class="colorName">${c.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `

  rowById.set(mesh.userData.id, row)
  row.addEventListener('click', (e) => { if (e.target.closest('button') || e.target.closest('input')) return; selectMesh(mesh) })

  row.querySelector('[data-action="toggle"]').addEventListener('click', () => { mesh.visible = !mesh.visible; refreshRowToggleButton(mesh) })
  row.querySelector('[data-action="delete"]').addEventListener('click', () => {
    if (selectedMesh === mesh) clearSelection()
    modelsGroup.remove(mesh); mesh.geometry?.dispose?.(); mesh.material?.dispose?.(); rowById.delete(mesh.userData.id); row.remove(); setCount()
  })

  const range = row.querySelector('[data-action="opacity"]'), valEl = row.querySelector('[data-opacity-val]')
  range.addEventListener('input', () => { valEl.textContent = `${range.value}%`; setMeshOpacity(mesh, range.value / 100) })

  const colorMenu = row.querySelector('[data-color-menu]'), colorInd = row.querySelector('[data-color-indicator]')
  row.querySelector('[data-action="color-dropdown"]').addEventListener('click', (e) => {
    e.stopPropagation()
    document.querySelectorAll('[data-color-menu].show').forEach(m => { if (m !== colorMenu) m.classList.remove('show') })
    colorMenu.classList.toggle('show')
  })
  row.querySelectorAll('[data-action="color"]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); const hex = parseInt(btn.dataset.hex); setMeshColor(mesh, hex); colorInd.style.background = `#${hex.toString(16).padStart(6,'0')}`; colorMenu.classList.remove('show') })
  })
  document.addEventListener('click', () => colorMenu.classList.remove('show'))
  modelsListEl.prepend(row)
}

// ---------------- CARGA MULTIFORMATO ----------------
async function loadModelFile(file) {
  const extension = file.name.split('.').pop().toLowerCase()
  const buffer = await file.arrayBuffer()
  let geometry = null

  try {
    if (extension === 'stl') geometry = stlLoader.parse(buffer)
    else if (extension === 'ply') geometry = plyLoader.parse(buffer)
    else if (extension === 'obj') {
      const objGroup = objLoader.parse(new TextDecoder().decode(buffer))
      objGroup.traverse((child) => { if (child.isMesh && !geometry) geometry = child.geometry.clone() })
    }

    if (!geometry) throw new Error("No se pudo extraer la geometría")
    if (!geometry.attributes.normal) geometry.computeVertexNormals()

    const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xcfd8ff, roughness: 0.55, metalness: 0.1, side: THREE.DoubleSide }))
    mesh.userData.id = `m${idCounter++}`; mesh.userData.name = file.name; mesh.userData.opacity = 1

    modelsGroup.add(mesh)
    createRow(mesh)
    
    // Calcula la colisión y lanza el aviso en cuanto termina
    ensureBVH(mesh)
    scheduleInterferenceCheck(150)
    
  } catch (error) { showCollisionToast(`❌ Error al cargar ${file.name}`) }
}

async function handleFiles(fileList) {
  // BLOQUEO DE SEGURIDAD PARA MODO VISOR
  if (isViewOnly) {
    showCollisionToast("👁️ Modo Visor activado: No se pueden cargar más archivos.", 3000)
    return
  }

  const files = [...fileList].filter(f => ['.stl', '.obj', '.ply'].some(ext => f.name.toLowerCase().endsWith(ext)))
  if (!files.length) return showCollisionToast("⚠️ Formato no soportado")
  
  for (const f of files) await loadModelFile(f)
  
  setCount()
  fitToModels()
}

// ---------------- EVENTOS INTERFAZ ----------------
btnLoad.addEventListener('click', () => fileInput.click())
fileInput.addEventListener('change', e => handleFiles(e.target.files))

btnMeasure.addEventListener('click', () => setMeasureMode(!measureMode))
btnClearMeasures.addEventListener('click', clearMeasures)

btnInterference.addEventListener('click', () => {
  if (interferenceMode) { 
    clearInterferenceMode() 
  } else {
    interferenceMode = true
    btnInterference.classList.add('active')
    interferencePanel.style.display = 'flex'
    
    checkInterferences() 
    schedulePreciseInterferenceCheck(++_interferenceRunId, 0)
  }
})

severityFilter.addEventListener('change', (e) => applySeverityFilter(e.target.value))

btnScreenshot.addEventListener('click', () => {
  renderer.render(scene, camera)
  const link = document.createElement('a')
  link.download = `Captura_Dental_${new Date().toISOString().slice(0,10)}.png`
  link.href = canvas.toDataURL('image/png'); link.click()
  showCollisionToast("📸 Captura guardada", 2000)
})

;['dragenter', 'dragover'].forEach(ev => window.addEventListener(ev, e => { e.preventDefault(); dropOverlay.classList.add('show') }))
;['dragleave', 'drop'].forEach(ev => window.addEventListener(ev, e => { e.preventDefault(); dropOverlay.classList.remove('show') }))
window.addEventListener('drop', e => handleFiles(e.dataTransfer.files))

// ---------------- SHARE / LINK ----------------
function createIndexedDBStorage(dbName = 'stl_viewer_db', storeName = 'shares') {
  const openDB = () => new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, 1)
    req.onupgradeneeded = () => { if (!req.result.objectStoreNames.contains(storeName)) req.result.createObjectStore(storeName) }
    req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error)
  })
  return {
    set: async (key, value) => { const db = await openDB(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, 'readwrite'); tx.objectStore(storeName).put(value, key); tx.oncomplete = () => resolve(true); tx.onerror = () => reject(tx.error) }) },
    get: async (key) => { const db = await openDB(); return new Promise((resolve, reject) => { const req = db.transaction(storeName, 'readonly').objectStore(storeName).get(key); req.onsuccess = () => resolve(req.result !== undefined ? { value: req.result } : null); req.onerror = () => reject(req.error) }) }
  }
}
const storage = createIndexedDBStorage()

btnShare.addEventListener('click', async () => {
  if (modelsGroup.children.length === 0) return alert('No hay modelos para compartir')
  shareModal.style.display = 'flex'; shareStatus.style.display = 'flex'; shareResult.style.display = 'none'
  try {
    const shareId = 'share_' + Date.now()
    const shareData = { models: modelsGroup.children.map(m => ({ name: m.userData.name, positions: Array.from(m.geometry.attributes.position.array), color: m.userData.colorHex || 0xcfd8ff, opacity: m.userData.opacity || 1 })), expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000) }
    await storage.set(shareId, JSON.stringify(shareData))
    shareStatus.style.display = 'none'; shareResult.style.display = 'block'
    shareLinkInput.value = `${window.location.origin}${window.location.pathname}?share=${shareId}`
  } catch (error) { shareModal.style.display = 'none'; alert('Error al generar el link') }
})

closeModal.addEventListener('click', () => shareModal.style.display = 'none')
btnCopyLink.addEventListener('click', () => { navigator.clipboard.writeText(shareLinkInput.value); btnCopyLink.textContent = '✅ Copiado!'; setTimeout(() => btnCopyLink.textContent = '📋 Copiar', 2000) })

setTimeout(async () => {
  const shareId = new URLSearchParams(window.location.search).get('share')
  if (!shareId) return

  // ---- ¡NUEVO! SE ACTIVA EL MODO SOLO VISOR AL ENTRAR POR ENLACE ----
  isViewOnly = true
  document.body.classList.add('view-only')
  
  const result = await storage.get(shareId)
  if (!result) return alert('❌ Link expirado')
  
  const shareData = JSON.parse(result.value)
  for (const mData of shareData.models) {
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(mData.positions), 3)); geo.computeVertexNormals()
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: mData.color, side: THREE.DoubleSide, transparent: mData.opacity < 1, opacity: mData.opacity }))
    mesh.userData = { id: `m${idCounter++}`, name: mData.name, opacity: mData.opacity, colorHex: mData.color }
    modelsGroup.add(mesh); createRow(mesh); ensureBVH(mesh); scheduleInterferenceCheck(1000)
  }
  setCount(); fitToModels()
  showCollisionToast("👁️ Modo Visor Activo", 3000)
}, 500)

// ---------------- LOOP ----------------
function animate() { resize(); controls.update(); renderer.render(scene, camera); requestAnimationFrame(animate) }
animate(); setCount()