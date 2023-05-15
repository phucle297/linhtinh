import LibraryResponseModel from 'models/response/LibraryDetailResponseModel'
import APIUrlEnum from 'utilities/APIUrlEnum'
import EffectUtility from 'utilities/EffectUtility'
export default class LibraryController {
  static async getLibraryDetail(id: string) {
    return await EffectUtility.getToModel(
      LibraryResponseModel,
      APIUrlEnum.GET_LIBRARY_DETAIL,
      { id }
    )
  }
  static async sendForm(formEdited: any) {
    return await EffectUtility.postToModel(
      {
        //data
      },
      APIUrlEnum.SEND_FORM,
      { ...formEdited },
      {}
    )
  }
}
