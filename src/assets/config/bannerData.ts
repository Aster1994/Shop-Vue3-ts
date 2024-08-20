interface Banner {
  title?: string
  text?: string
  image?: string
  altImage?: string
  hasButton?: boolean
  buttonText?: string
}

const banner: Banner = {
  title: 'بیایید لباس های خاص بپوشیم.',
  text: 'برای مد تأثیرگذار و نوآورانه زندگی کنید!',
  image: '../src/assets/images/test.png',
  altImage: 'A Dress',
  hasButton: true,
  buttonText: 'اینجا بخر!'
}
export default banner
