import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import img from './img.png';
import Avatar from '@material-ui/core/Avatar';
// import Widget3 from './widgets/Widget3';
// import Widget4 from './widgets/Widget4';
// import Widget5 from './widgets/Widget5';
// import Widget6 from './widgets/Widget6';
// import Widget7 from './widgets/Widget7';
// import Widget8 from './widgets/Widget8';
// import Widget9 from './widgets/Widget9';

function AnalyticsDashboardApp() {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgetsEntities);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<div className="w-full">
			<Widget1 data={widgets.widget1} />

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="container">
					<div>
						<div className="row">
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Total Users"
									paragraph="Active Users available in site" 
									icon="fas fa-users"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Total Jobs"
									paragraph="Total jobs placed till date"
									icon="fas fa-briefcase"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Service orders"
									paragraph="Total Service orders placed till date"
									icon="fas fa-phone-volume"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Total Revenue"
									paragraph="Total Turnover till date"
									icon="fas fa-money-bill-wave"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Net profit"
									paragraph="Net profit till date"
									icon="fas fa-money-bill-wave"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Live jobs"
									paragraph="Total in progess jobs"
									icon="fas fa-tv"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Live orders"
									paragraph="Total in progress service orders"
									icon="fas fa-tv"
								/>
							</div>
							<div className="col-lg-3 p-1">
								<Widget2 data={widgets.widget2} 
									title="Redeem Request"
									paragraph="Total in progress service orders"
									icon="fab fa-paypal"
								/>
							</div>
						</div>
					</div>
				</div>
				
			</FuseAnimate>
			<div className="row p-1">
				<div className="col-lg-6 p-1">
				<div className="card card-body">
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Typography variant="h5">
							Recent Activities
						</Typography>
						<small style={{ color: '#61DAFB' }}>View all</small>
					</div>
					<i class="fas fa-angle-up fa-2x"></i>
					</div>
					<hr />
					<div style={{ display: 'flex', height: '8vh',alignItems: 'center' }}>
					<Avatar src={img}/>
					<h6 style={{ marginLeft: 5 }}>Alice John has added a new service.Waiting for you to approve</h6>
					</div>
					<hr />
					<div style={{ display: 'flex', height: '8vh',alignItems: 'center' }}>
					<Avatar src={img}/>
					<h6 style={{ marginLeft: 5 }}>Alice John has added a new service.Waiting for you to approve</h6>
					</div>
					<hr />
					<div style={{ display: 'flex', height: '8vh',alignItems: 'center' }}>
					<Avatar src={img}/>
					<h6 style={{ marginLeft: 5 }}>Alice John has added a new service.Waiting for you to approve</h6>
					</div>
					<hr />
					<div style={{ display: 'flex', height: '8vh',alignItems: 'center' }}>
					<Avatar src={img}/>
					<h6 style={{ marginLeft: 5 }}>Alice John has added a new service.Waiting for you to approve</h6>
					</div>
					<hr />
					<div style={{ display: 'flex', height: '8vh',alignItems: 'center' }}>
					<Avatar src={img}/>
					<h6 style={{ marginLeft: 5 }}>Alice John has added a new service.Waiting for you to approve</h6>
					</div>
				</div>
				</div>
				<div className="col-lg-6">
				<div className="card card-body">
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center',height: '8vh' }}>
						<Typography variant="h5">
							Usefull Quick Links
						</Typography>
						<i class="fas fa-angle-up fa-2x"></i>
					</div>
					<hr />
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center',height: '8vh' }}>
						<div style={{ display: 'flex',alignItems: 'center' }}>
						<i style={{ color: '#61DAFB',marginRight: 10 }} className="fas fa-list"></i>
						<h6>Common Site Settings</h6>
						</div>
						<i class="fas fa-chevron-right"></i>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center',height: '8vh' }}>
						<div style={{ display: 'flex',alignItems: 'center' }}>
						<i style={{ color: '#61DAFB',marginRight: 10 }} class="fas fa-users"></i>
						<h6>Manage Website Users</h6>
						</div>
						<i class="fas fa-chevron-right"></i>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center',height: '8vh' }}>
						<div style={{ display: 'flex',alignItems: 'center' }}>
						<i style={{ color: '#61DAFB',marginRight: 10 }} class="fas fa-columns"></i>
						<h6>Manage Categories</h6>
						</div>
						<i class="fas fa-chevron-right"></i>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center',height: '8vh' }}>
						<div style={{ display: 'flex',alignItems: 'center' }}>
						<i style={{ color: '#61DAFB',marginRight: 10 }} class="fas fa-users"></i>
						<h6>Manage Sub Categories</h6>
						</div>
						<i class="fas fa-chevron-right"></i>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center',height: '8vh' }}>
						<div style={{ display: 'flex',alignItems: 'center' }}>
						<i style={{ color: '#61DAFB',marginRight: 10 }} className="fas fa-briefcase"></i>
						<h6>Manage Job Requests</h6>
						</div>
						<i class="fas fa-chevron-right"></i>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
