import { getLayout } from '../components/layout/MainLayout'
import SlideTransition from '../components/transition/SlideTransition'

function Work() {
  return (
    <SlideTransition>
      <div>
        <h1>Work</h1>
      </div>
    </SlideTransition>
  )
}

Work.getLayout = getLayout
export default Work