"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Jester(props) {
  const { nodes, materials } = useGLTF('/models/michael_oc_by__kanbaki.glb')
  const modelRef = useRef()
  useFrame(( state, delta, xrFrame ) => { 
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    
  })
  //const { actions } = useAnimations(animations, group)
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0, -1.5, 0]}
    scale={[1.7, 1.7, 1.7]}
    rotation={[0.05, 0, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="1_0" position={[0, 1.427, -0.256]} rotation={[0, -0.008, 0]} />
              <group
                name="Key001_3"
                position={[0.506, 1.473, -0.304]}
                rotation={[-0.176, 0.104, 0.001]}>
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key002_4"
                position={[0.001, 1.113, -0.639]}
                rotation={[0.059, -0.002, 0.099]}>
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key003_5"
                position={[-0.01, 1.805, 0.093]}
                rotation={[0.389, -0.195, 0.554]}>
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key004_6"
                position={[-0.5, 1.425, -0.259]}
                rotation={[0.368, 0.155, -0.185]}>
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key005_7"
                position={[-0.252, 1.227, -0.553]}
                rotation={[0.621, 1.127, 0.308]}>
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key006_8"
                position={[-0.352, 1.688, -0.017]}
                rotation={[0.085, 0.794, 0.039]}>
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key007_9"
                position={[0.331, 1.221, -0.554]}
                rotation={[-0.272, 0.353, 0.136]}>
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group
                name="Key008_10"
                position={[0.321, 1.682, 0.027]}
                rotation={[-0.099, 1.113, 0.3]}>
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials['Michael.Keys.001']}
                />
              </group>
              <group name="Cubes_11" position={[0, 1.427, -0.256]} rotation={[0, -0.016, 0]}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials['Michael.Keys.002']}
                />
              </group>
              <group name="MichaelBody_16">
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials['Michael.Body']}
                />
              </group>
              <group name="MichaelHair_17">
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials['Michael.Hair']}
                />
              </group>
              <group name="MichaelClothes_18">
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials['Michael.Clothes']}
                />
              </group>
              <group name="MichaelCloak_19">
                <mesh
                  name="Object_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials['Michael.Cloak']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/models/michael_oc_by__kanbaki.glb')
