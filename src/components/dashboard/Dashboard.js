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
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavBar />
			<Container>
				<ViewContainer isOpen={isOpen}>
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
				<ViewContainer span="2" light isOpen={isOpen}>
					<ViewHeader dark>
						<ListViewTypography variant="h4">
							Offered Courses
						</ListViewTypography>
					</ViewHeader>
					<ListViewCardContainer></ListViewCardContainer>
				</ViewContainer>
				{isOpen ? (
					<CheckButton onClick={() => setIsOpen(!isOpen)} />
				) : (
					<>
						<AddButton onClick={() => setIsOpen(!isOpen)} />
						<GraphButton />
					</>
				)}
			</Container>
		</>
	);
}

export default Dashboard;
