
import CustomInput from '@/components/classComponents/customInput'
const getComponentMap = (key) => {
  let component
  switch (key) {
    case 'customInput':
      component = <CustomInput></CustomInput>
      break;
  
  }

  return component
}


export {
  getComponentMap
}