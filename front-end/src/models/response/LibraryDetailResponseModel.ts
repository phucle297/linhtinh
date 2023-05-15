import { BaseModel } from 'sjs-base-model'
import LibraryModel from 'models/generic/LibraryModel'

export default class LibraryDetailResponseModel extends BaseModel {
  message = null
  data: LibraryModel[] = []
  total = 0

  constructor(props: any) {
    super()
    this.update(props)
  }
  update(props: any) {
    super.update(props)
    if (props) {
      this.data = props?.data?.flashmobSubmission || []
      this.total = props?.data?.flashmobSubmission?.total || 0
    }
  }
}
