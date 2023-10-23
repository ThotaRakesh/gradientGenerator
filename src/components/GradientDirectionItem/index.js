import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    gradientDirectionsDetails,
    isActive,
    clickGradientDirectionItem,
  } = props
  const {displayText, value} = gradientDirectionsDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
