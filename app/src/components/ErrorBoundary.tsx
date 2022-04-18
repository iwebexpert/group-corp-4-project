import React, {ReactNode, Component} from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
  constructor(props: ErrorBoundaryProps){
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error: Error){
    return {hasError: true}
  }

  render(){
    if(this.state.hasError){
      return (<h2>Remote component не может быть загружен. Обновите страницу</h2>)
    }
    return this.props.children
  }
}

export default ErrorBoundary