import { Feather } from '@expo/vector-icons';
import { KeyboardType } from "react-native";

type IType = 'text' | 'email' | 'password' | 'number' | 'date' | 'date-time' | 'time' | 'checkbox' | 'radio' | 'select';

export interface IFormSchema {
  id?: string | number;
  version?: string | number;
  codigo?: string;
  name: string;
  title: string;
  shownTitle?: boolean;
  shownLabels?: boolean;
  shownInputIcons?: boolean;
  fields: IFieldSchema[];
}

interface IFieldSelectItem {
  value: string;
  label: string;
  icon: string;
}

export interface IFieldSchema {
  name: string;
  type: IType,
  value?: string | number | boolean | undefined;
  label?: string;
  icon?: React.ComponentProps<typeof Feather>['name'];
  placeholder: string;
  required?: boolean;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  colLenght?: number;
  selectItems?: IFieldSelectItem[];
  validations?: {
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    confirmed?: string;
    pattern?: {
      regex: string;
      message: string;
    };
    need?: [
      string[]
    ]
  }
}