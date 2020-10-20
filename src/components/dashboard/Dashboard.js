import React, { useState } from "react";
import NavBar from "./NavBar";
import {
	Container,
	ViewContainer,
	ViewHeader,
	ListViewTypography,
	ListViewHeaderAccent,
	ListViewCardContainer,
	CheckButton,
	AddButton,
	GraphButton,
} from "./DashboardComponents";

function Dashboard() {

	const [viewState, setViewState] = useState("dashboard");

	return (
		<>
			<NavBar />

			<Container>

				{viewState === ("dashboard") || viewState === ("add") ? (
					<>
						<ViewContainer isOpen={viewState === ("add")}>
							<ViewHeader>
								<ListViewTypography variant="h4">
									My Course Plan
								</ListViewTypography>
								<ListViewTypography>
									Total Credits:{`${10}`}
								</ListViewTypography>
							</ViewHeader>
							<ListViewHeaderAccent />
							<ListViewCardContainer></ListViewCardContainer>
						</ViewContainer>
						<ViewContainer span="2" light isOpen={viewState === ("add")}>
							<ViewHeader dark>
								<ListViewTypography variant="h4">
									Offered Courses
						</ListViewTypography>
							</ViewHeader>
							<ListViewCardContainer></ListViewCardContainer>
						</ViewContainer> </>
				) : (
						<>
							<ViewContainer>
								<ViewHeader>
									<ListViewTypography variant="h4">
										Graph View
								</ListViewTypography>
									<ListViewTypography>
										Total Credits:{`${10}`}
									</ListViewTypography>
								</ViewHeader>
								<ListViewHeaderAccent />
								<ListViewCardContainer></ListViewCardContainer>
							</ViewContainer>
						</>
					)}
				<ShowButtons viewState={viewState} setViewState={setViewState} />

			</Container>
		</>
	);
}

function ShowButtons(props) {
	if (props.viewState === "dashboard") {
		return (
			<>
				<GraphButton onClick={() => props.setViewState("graph")} />
				<AddButton onClick={() => props.setViewState("add")} />
			</>
		)
	}
	return (
		<CheckButton onClick={() => props.setViewState("dashboard")} />
	)
}

export default Dashboard;
