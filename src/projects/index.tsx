import { ProductListContainer } from './product-list-container'

function Project (id:string) {
    switch (id) {
        case '62S5WzYkA3uJccKcLGdne3':
            return <ProductListContainer />
        case '2':
            return <div>Project 2</div>
        case '3':
            return <div>Project 3</div>
        default:
            return <div>Project not found</div>
    }
}
function index({sysId}:{sysId:string}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1>React Project</h1>
        {Project(sysId)}
    </div>
  )
}

export default index





