// https://github.com/Meituan-Dianping/mpvue/issues/736
import niceRouter from '@/nice-router/nice-router.model'
import forEach from 'lodash/forEach'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import merge from 'lodash/merge'
import values from 'lodash/values'
import listof from '../listof/listof.model'
import app from './app.model'

import ModelTools from './model-tools'

const modelListOOTB = [
  niceRouter,
  app,
  listof,
  'home',
  'me',
  'navigationList',
  'H5',

  'genericform',

  'genericpage',
  'genericpage2',

  'listofpage',
  'listofpage2',
  'listofpage3',
  'listofpage4',
  //biz
]

const customizedModelList = []

let modelList = []
modelList = modelList.concat(modelListOOTB.filter((it) => isString(it)))
modelList = modelList.concat(customizedModelList.filter((it) => isString(it)))

modelList = modelList.concat(modelListOOTB.filter((it) => isObject(it)))
modelList = modelList.concat(customizedModelList.filter((it) => isObject(it)))

const modelContainer = {}
console.log('prepare to initial models from modelList', modelList)

forEach(modelList, (it) => {
  const nameSpace = isString(it) ? it : it.namespace

  let modelObj = ModelTools.createDefault(nameSpace)
  if (!isString(it)) {
    modelObj = merge(modelObj, it)
  }
  modelContainer[nameSpace] = modelObj
})
const models = values(modelContainer)
console.log('models of list:', models)

export default models
