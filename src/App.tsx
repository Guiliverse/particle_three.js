import { Suspense } from "react"
import SkyBox from "./components/skybox"
import Stars from "./components/stars"
import { Canvas } from "@react-three/fiber"

export const App = () => {
  return (
    <div className="App" id="container">
      <Canvas
        camera={{
          position: [0, 0, 100],
          near: 0.01,
          far: 5000,
          fov: 45,
        }}
      >
        <Stars />
        <Suspense fallback={null}>
          <SkyBox />
        </Suspense>
        <ambientLight color="#404040" intensity={1} />
      </Canvas>
    </div>
  )
}
