import React from 'react'
import Category from './Category'
import '../../static/style/layout/Category.css';
import LayoutRegistered from '../HOC/LayoutRegistered';
function CategoryWindow (props){
  const { currentUser, redirectPage } = props
    return (
      <LayoutRegistered>
      <div className = "category__window">
          <Category/>
      </div>
      </LayoutRegistered>
    )

}
export default CategoryWindow