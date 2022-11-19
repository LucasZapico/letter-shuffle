const base = {
  title: 'Letter Shuffler',
  description: 'A simple web app that shuffle around the letters of a word',
  language: 'en-us',
  copyWrite: 'lucaszapico',
  author: '',
  // file name of open graphy image located in public
  openGraphImage: '',
}

/**
 * only add the socials users name
 *
 * -- example --
 * reddit: 'magicPotatos'
 * facebook: 'Steve-McQueen'
 * etc
 */
const social = {
  tiktok: '',
  facebook: '',
  reddit: '',
  linkedIn: '',
  instagram: '',
  twitter: '',
  devto: '',
  youtube: '',
  whatsapp: '',
  snapchat: '',
  telegram: '',
  pinterest: '',
}

const siteMetaData = {
  ...base,
  ...social,
}

export default siteMetaData
