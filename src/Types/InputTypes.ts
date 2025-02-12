export type InputType = {
  id: string;
  name: string;
  type: string;
  title: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}