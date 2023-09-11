import React from 'react'
import ContentLoader from "react-content-loader"
type SkeletonProps = {
   width?:string,
   height?:string,
   }
const Skeleton:React.FC<SkeletonProps> = (props) => {
  return (
  <ContentLoader 
    speed={2}
    width={props?.width ? props.width : 400}
    height={props?.height ? props.height : 600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="12" rx="15" ry="15" width="382.5" height="450" /> 
    <rect x="6" y="479" rx="15" ry="15" width="120" height="25" /> 
    <rect x="172" y="515" rx="0" ry="0" width="7" height="0" /> 
    <rect x="7" y="526" rx="15" ry="15" width="120" height="25" />
  </ContentLoader>
  )
}

export default Skeleton