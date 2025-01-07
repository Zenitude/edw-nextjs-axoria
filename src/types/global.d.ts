declare type FieldProps = {
  type: string;
  name: string;
  forId: string;
  value?: string;
  onChange: (e: React.ChangeEvent<T>) => void;
  label?: string;
  placeholder?: string;
  options?: {
    value: string;
    text: string;
  }[];
  customField?: string;
  customLabel?: string;
  min?: number;
  max?: number;
  step?: number;
  checked?: boolean;
  selected?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
}

declare type DataFormType = {
  title: string;
  file: File | null;
  tags: string[];
  post: string;
}

declare type PostType = {
  title: string;
  slug: string;
  content: string;
  tags: string[];
  imageUrl: string;
  date: string;
  author: string;
}

declare type CardProps = {
  datas: PostType;
}