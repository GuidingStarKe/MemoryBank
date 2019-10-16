import React,{Component} from 'react';
import './index.scss';

	
export default class Tabs extends Component{
	constructor(props){
		super(props);
		this.state = {
			cursorIdx:0
		}
		this.handleClick.bind(this);
	}
	handleClick(idx,e){
		this.setState({
			cursorIdx:idx
		})
	}
	render(){
		return (
			<div className="tabs-content">
				{this.state.cursorIdx===0?
					<div className="tabs-item tabs-cursor" data-idx="0" onClick={(e)=>this.handleClick(0,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memoptions3"></i>
						</div>
						<div className="item-name">首页</div>
					</div>
					:
					<div className="tabs-item" data-idx="0" onClick={(e)=>this.handleClick(0,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memoptions3"></i>
						</div>
						<div className="item-name">首页</div>
					</div>
				}
				
				{this.state.cursorIdx===1?
					<div className="tabs-item tabs-cursor" data-idx="1" onClick={(e)=>this.handleClick(1,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memkongjian"></i>
						</div>
						<div className="item-name">社区</div>
					</div>
					:
					<div className="tabs-item" data-idx="1" onClick={(e)=>this.handleClick(1,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memkongjian"></i>
						</div>
						<div className="item-name">社区</div>
					</div>
				}
				
				{this.state.cursorIdx===2?
					<div className="tabs-item tabs-cursor" data-idx="2" onClick={(e)=>this.handleClick(2,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memsiyecao"></i>
						</div>
						<div className="item-name">列表</div>
					</div>
					:
					<div className="tabs-item" data-idx="2" onClick={(e)=>this.handleClick(2,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memsiyecao"></i>
						</div>
						<div className="item-name">列表</div>
					</div>
				}
				
				{this.state.cursorIdx===3?
					<div className="tabs-item tabs-cursor" data-idx="3" onClick={(e)=>this.handleClick(3,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memwode"></i>
						</div>
						<div className="item-name">我的</div>
					</div>
					:
					<div className="tabs-item" data-idx="3" onClick={(e)=>this.handleClick(3,e)}>
						<div className="icon-content">
							<i className="iconfont icon-size memwode"></i>
						</div>
						<div className="item-name">我的</div>
					</div>
				}			
			</div>
		)
	}
}