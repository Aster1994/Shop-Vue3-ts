/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faArrowLeftLong,
  faCartShopping,
  faHeadset,
  faImage,
  faKey,
  faMagnifyingGlass,
  faMobileScreenButton,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faInstagram,
  faTelegram,
  faHeadset,
  faKey,
  faImage,
  faMagnifyingGlass,
  faMobileScreenButton,
  faArrowLeftLong,
  faUserTie,
  faCartShopping,
  faAngleLeft
)

export default library
