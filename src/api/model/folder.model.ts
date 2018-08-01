import { BaseModel } from '@api/model/base.model'
import { PiaModel, FolderModel } from '@api/models'

export class Folder extends BaseModel {
  public name: string;
  public structure_id: any;
  public parent: FolderModel;
  public children: FolderModel[];
  public pias: PiaModel[];
  public isRoot: boolean;
}
