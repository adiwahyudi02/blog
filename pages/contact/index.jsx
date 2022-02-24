import { getLayout } from "../../components/layout/MainLayout"
import SlideTransition from "../../components/transition/SlideTransition"

function Contact() {
  return (
    <SlideTransition>
      <div>
        <h1>Contact</h1>
      </div>
    </SlideTransition>
  )
}

Contact.getLayout = getLayout
export default Contact