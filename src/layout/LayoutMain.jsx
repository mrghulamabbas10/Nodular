
import SplashCursor from "../components/animations/SplashCursor"
export default function LayoutMain({ children }) {
  return (
    <>
      <SplashCursor />
      { children }
    </>
  )
}
