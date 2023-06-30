import { FallingLines } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
<FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
 />
    </div>

    )
}

export default Loading