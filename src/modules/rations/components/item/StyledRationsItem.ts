import { styled } from 'styled-components'
import { StyledText } from '../../../../components/styled/text/StyledText'

export const StyledRationsItem = styled.div`
   width: 280px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

export const RationsItemImg = styled.img`
   width: 280px;
   height: 335px;
   background: #fff;
   margin-bottom: 45px;
   cursor: pointer;
   transition: box-shadow 0.2s ease-in-out;
   &:hover {
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.4);
   }
`
export const RationsItemTitle = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-weight: 700;
   margin-bottom: 4px;
   cursor: pointer;
   position: relative;

   &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: -3px;
      width: 0%;
      height: 1px;
      background: ${(props) => props.theme.colors.black};
      transition: width 0.2s ease-in-out;
   }
   &:hover:before {
      width: 100%;
   }
`
export const RationsItemSubTitle = styled(StyledText)`
   color: ${(props) => props.theme.colors.lightGray};
   font-size: 13px;
   margin-bottom: 16px;
`

export const RationsItemText = styled(StyledText)`
   font-size: 14px;
   line-height: 140%;
   margin-bottom: 11px;
`

export const RationsItemGrams = styled(StyledText)`
   color: ${(props) => props.theme.colors.lightGray};
   font-size: 13px;
   margin-bottom: 24px;
   flex: 1 1 auto;
`
