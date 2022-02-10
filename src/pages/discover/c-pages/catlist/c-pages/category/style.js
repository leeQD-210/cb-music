import styled from 'styled-components'
export const ListCategoryWrapper = styled.div`
    .all{
    font-size: 24px;
    font-weight: 600;
    margin-right: 15px;
    }
        .all_category{
            width: 100px;
            height: 30px;
            border-radius: 10px;
            font-size: 13px;
            cursor: pointer;
            .arrow{
                transform: rotate(180deg)
                }
            }
    .divider{
        margin-top:5px;
        width:100%;
            height: 3px;
            background-color: #e26b0a;
    }
  .dropdown_menu {
    position:relative;
        top:7px;
    width: 700px;
    height: 400px;
    background-color: #fafafa;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    z-index: 999;
    &::after{
        position: absolute;
        top:-24px;
        left:100px;
        content:'';
        display:block;
        border: 12px solid transparent;
        border-bottom-color: #fafafa;
    }
  }
`
