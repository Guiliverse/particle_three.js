import { useLoader } from "@react-three/fiber"
import { BackSide, TextureLoader } from "three"

const SkyBox = () => {
  const skyboxTexture = useLoader(TextureLoader, "/images/high-res-texture.jpg")

  return (
    <mesh>
      <sphereBufferGeometry args={[1000, 100, 100]} />
      <meshBasicMaterial map={skyboxTexture} side={BackSide} />
    </mesh>
  )
}

export default SkyBox
