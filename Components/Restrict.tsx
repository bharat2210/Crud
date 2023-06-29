import React from 'react'
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

const Restrict = () => {
    const router=useRouter()

    const handlehome = () => {
  router.push('/Apiproducts')
    }
  return (
    <div>
  
  <Result
    status="403"
    title="403 Forbidden"
    subTitle="You are not authorized to access this page."
    extra={<Button type="primary" onClick={handlehome}>Back Home</Button>}
  />
  {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/website-error-403-forbidden-1841911-1561834.png?f=webp" alt="" style={{height:"200px",width:"200px",borderRadius:"100%",margin:"auto"}} /> */}

    </div>
  )
}

export default Restrict