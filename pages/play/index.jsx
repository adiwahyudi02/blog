import { getLayout } from "../../components/layout/MainLayout"
import SlideTransition from "../../components/transition/SlideTransition"

function Play() {
  return (
    <SlideTransition>
      <div>
        <h1>Play</h1>
      </div>
    </SlideTransition>
  )
}

Play.getLayout = getLayout
export default Play