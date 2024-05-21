export interface ITStore {
  navigation: "Home" | "Projects" | "Resume" | "Contact" | "Terms";
}


export interface ITProps {
  navigation: ITStore['navigation'];
}
