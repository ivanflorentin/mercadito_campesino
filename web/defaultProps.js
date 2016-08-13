import apps from './Apps'

const mapProviders = (apps) =>{
  let providers = {}
  Object.keys(apps).map(app =>{
    Object.assign(providers, apps[app].providers)
  })
  return providers
}

const providers = mapProviders(apps)
const defaultProps = {
  providers
}
// console.log('DefaultProps:', defaultProps)
export default defaultProps
