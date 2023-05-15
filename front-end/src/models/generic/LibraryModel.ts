import { BaseModel } from 'sjs-base-model'

export default class LibraryModel extends BaseModel {
  id = ''
  status = ''
  createdAt = ''
  updatedAt = ''
  name = ''
  description = ''
  scholarParticipationTypeId = ''
  scholarTeamInformationId = ''
  videoId = ''
  scholarTeamInformation = {
    id: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    name: '',
    cityId: '',
    districtId: '',
    schoolId: '',
    scholarTeamMembers: []
  }
  video = {
    id: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    path: '',
    destination: '',
    fileName: '',
    originalName: '',
    fieldName: '',
    mimetype: ''
  }
  constructor(props: any) {
    super()
    this.update(props)
  }
}
