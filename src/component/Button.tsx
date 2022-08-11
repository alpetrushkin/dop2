type ButtonPropsType = {
   nickName: string,
   callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
   const onClickHandler = () => {
      props.callBack()
   }

   return (
      <button onClick={onClickHandler}>{props.nickName}</button>
   )
}