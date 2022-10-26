import { useMemo } from "react"
import {
  AdditiveBlending,
  BufferGeometry,
  Float32BufferAttribute,
  TextureLoader,
} from "three"

const Stars = () => {
  const sprite1 = useMemo(() => new TextureLoader().load("images/star.jpg"), [])
  const sprite2 = useMemo(
    () => new TextureLoader().load("images/star2.jpg"),
    []
  )
  const sprite3 = useMemo(
    () => new TextureLoader().load("images/star4.jpg"),
    []
  )
  const starParams = [
    { color: "#F7FF00", texture: sprite1, size: 60 },
    { color: "#FFC100", texture: sprite1, size: 30 },
    { color: "#00FFE0", texture: sprite2, size: 15 },
    { color: "#FFF", texture: sprite3, size: 80 },
  ]
  const geometry = useMemo(() => {
    const geometry = new BufferGeometry()
    const verts = []
    for (let i = 0; i < 70; i++) {
      const x = Math.random() * 800 - 100
      const y = Math.random() * 800 - 100
      const z = Math.random() * 800 - 100
      verts.push(x, y, z)
    }
    geometry.setAttribute("position", new Float32BufferAttribute(verts, 3))
    return geometry
  }, [])

  return (
    <>
      {starParams.map((param, i) => {
        return (
          <points
            key={i}
            geometry={geometry}
            rotation={[Math.random() * 2, Math.random() * 6, Math.random() * 6]}
          >
            <pointsMaterial
              size={param.size}
              map={param.texture}
              blending={AdditiveBlending}
              transparent={true}
              depthTest={false}
              color={param.color}
              opacity={0.8}
            />
          </points>
        )
      })}
    </>
  )
}

export default Stars
