// tailwind-utils.ts

export const flexBetween: string = "flex justify-between items-center";

export const text30Extrabold: string = "text-[30px] font-extrabold text-white";
export const text30Bold: string = "text-[30px] font-bold text-black";
export const text30Semibold: string = "font-semibold text-[30px] text-black";
export const text26Semibold: string = "font-semibold text-[26px] text-black";
export const text24Black: string = "text-[24px] font-black text-black";
export const text20Medium: string = "font-medium text-[20px] text-black";
export const text16Medium: string = "font-medium text-[16px] text-black";
export const text14Normal: string = "font-normal text-sm text-white-100/80";

export const pinkContainer: string = "w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6";
export const tag: string = "bg-secondary px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri";
export const heading: string = "uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5";
export const subHeading: string = "font-medium text-[20px] text-white max-w-2xl text-center break-words";
export const sectionContainer: string = "px-6 py-10 max-w-7xl mx-auto";
export const cardGrid: string = "grid md:grid-cols-3 sm:grid-cols-2 gap-5";
export const cardGridSm: string = "grid sm:grid-cols-2 gap-5";
export const noResult: string = "text-black-100 text-sm font-normal";

// profile
export const profileContainer: string = "w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10";
export const profileCard: string = "w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-primary border-[5px] border-black shadow-100 rounded-[30px] relative z-0 h-fit max-lg:w-full";
export const profileTitle: string = "w-11/12 bg-white border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9 after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-6 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:content-[''] before:-bottom-1 before:left-0 before:-skew-y-6 before:w-full before:h-[60px] before:bg-black before:-z-[1] before:rounded-[20px] shadow-100";
export const profileImage: string = "rounded-full object-cover border-[3px] border-black";

// idea details
export const divider: string = "border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto";
export const viewSkeleton: string = "bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3";

// navbar
export const avatar: string = "p-0 focus-visible:ring-0 bg-none rounded-full drop-shadow-md !important";
export const dropdownMenu: string = "w-56 border-[5px] border-black bg-white p-5 rounded-2xl !important";
export const login: string = "border-[5px] py-4 border-black bg-white text-black relative shadow-100 font-work-sans font-medium hover:shadow-none transition-all duration-500 !important";

// searchform
export const searchForm: string = "max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5";
export const searchInput: string = "flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none";
export const searchBtn: string = "size-[50px] rounded-full bg-black flex justify-center items-center !important";

// startupcard
export const startupCard: string = "bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100";
export const startupCardDate: string = "font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100";
export const startupCardDesc: string = "font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all";
export const startupCardImg: string = "w-full h-[164px] rounded-[10px] object-cover";
export const startupCardBtn: string = "rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important";
export const startupCardSkeleton: string = "w-full h-96 rounded-[22px] bg-zinc-400";

// startupform
export const startupForm: string = "max-w-2xl mx-auto bg-white my-10 space-y-8 px-6";
export const startupFormLabel: string = "font-bold text-[18px] text-black uppercase";
export const startupFormInput: string = "border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important";
export const startupFormTextarea: string = "border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300 !important";
export const startupFormError: string = "text-red-500 mt-2 ml-5";
export const startupFormEditor: string = "mt-3 border-[3px] border-black text-[18px] text-black font-semibold placeholder:text-black-300 !important";
export const startupFormBtn: string = "bg-primary border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] !important";

// view
export const viewContainer: string = "flex justify-end items-center mt-5 fixed bottom-3 right-3";
export const viewText: string = "font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-lg capitalize";
export const categoryTag: string = "font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full";

// pattern
export const pattern: string = "background-image: linear-gradient(to right, transparent 49.5%, rgba(251, 232, 67, 0.2) 49.5%, rgba(251, 232, 67, 0.6) 50.5%, transparent 50.5%); background-size: 5% 100%; background-position: center; background-repeat: repeat-x;";

// tag-tri
export const tagTri: string = "before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent";

export const wMdEditorToolbar: string = "padding: 10px !important";
