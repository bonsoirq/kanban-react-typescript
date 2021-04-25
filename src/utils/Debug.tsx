type Props = {
  object: any;
}
export const Debug = ({object}: Props) => (
  <pre>
    <code>
      {JSON.stringify(object, null, 2)}
    </code>
  </pre>
)
