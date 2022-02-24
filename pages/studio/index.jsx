import { getLayout } from "../../components/layout/MainLayout"
import SlideTransition from "../../components/transition/SlideTransition"

function Studio() {
  return (
    <SlideTransition>
      <div>
        <h1>Studio</h1>
      </div>
    </SlideTransition>
  )
}

Studio.getLayout = getLayout
export default Studio