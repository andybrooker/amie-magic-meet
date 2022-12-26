import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import * as Separator from "@radix-ui/react-separator";
import * as Avatar from "@radix-ui/react-avatar";
import React from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";

const inter = Inter({ subsets: ["latin"] });

type Background =
  | "var(--bg-grey)"
  | "var(--bg-red)"
  | "var(--bg-orange)"
  | "var(--bg-yellow)"
  | "var(--bg-green)"
  | "var(--bg-blue)"
  | "var(--bg-purple)"
  | "var(--bg-pink)";

type BoxShadow =
  | "var(--box-shadow-grey)"
  | "var(--box-shadow-red)"
  | "var(--box-shadow-orange)"
  | "var(--box-shadow-yellow)"
  | "var(--box-shadow-green)"
  | "var(--box-shadow-blue)"
  | "var(--box-shadow-purple)"
  | "var(--box-shadow-pink)";

export default function Home() {
  return (
    <>
      <Head>
        <title>Magic Meet</title>
        <meta name="description" content="Speeding up meeting location!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Widget />
      </main>
    </>
  );
}

type MeetPage = 1 | 2 | 3;

const Widget = () => {
  const [background, setBackground] =
    React.useState<Background>("var(--bg-blue)");
  const [boxShadow, setBoxShadow] = React.useState<BoxShadow>(
    "var(--box-shadow-blue)"
  );
  const [hoverbackground, setHoverbackground] =
    React.useState<string>("#D5EAFF");

  const toggleColor = (
    background: Background,
    boxShadow: BoxShadow,
    hoverbackground: string
  ) => {
    setBackground(background);
    setBoxShadow(boxShadow);
    setHoverbackground(hoverbackground);
  };

  const [magicMeet, setMagicMeet] = React.useState<MeetPage>(1);
  const [data, setData] = React.useState<Data | null>(null);
  const [location, setLocation] = React.useState<null | Location>(null);

  return (
    <div className={styles.description} style={{ background: background }}>
      <div style={{ boxShadow: boxShadow }} className={styles.widget}>
        <div className={styles.cardTitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="24 24"
          >
            <path
              d="M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 2 10 C 2 14.418 5.582 18 10 18 C 14.418 18 18 14.418 18 10 C 18 5.582 14.418 2 10 2 C 5.582 2 2 5.582 2 10 Z"
              fill="#bfbfbf"
            ></path>
            <path
              d="M 6 11 L 8.5 13.5 L 14 8"
              fill="transparent"
              stroke-width="2"
              stroke="#bfbfbf"
              stroke-linecap="round"
            ></path>
          </svg>
          <span>Chat with Dennis?</span>
        </div>
        <div className={styles.spacing}>
          <div className={styles.guestbox}>
            <span>WHERE</span>
            <div style={{ display: "flex", gap: "8px" }}>
              {location ? (
                <div
                  className={styles.input + " " + styles.nowrap}
                  style={{ flex: 1 }}
                >
                  {location.name + ", " + location.location.zip_code}
                </div>
              ) : (
                <input
                  style={{ flex: 1 }}
                  className={styles.input}
                  type="text"
                  id="location"
                  placeholder="Search or tap the magic wand..."
                />
              )}
              <button
                onClick={() => setMagicMeet(2)}
                className={styles.plus}
                style={{ background: hoverbackground }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z"
                    fill="var(--gray11)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Wizard
            page={magicMeet}
            data={data}
            setData={setData}
            hoverbackground={hoverbackground}
            setLocation={setLocation}
            setMagicMeet={setMagicMeet}
          />
        </div>
        <ColorBar toggleColor={toggleColor} />
      </div>
    </div>
  );
};

const Wizard = ({
  data,
  setData,
  hoverbackground,
  setLocation,
  setMagicMeet,
  page,
}: {
  data: Data | null;
  hoverbackground?: string;
  setLocation: (location: Location) => void;
  setMagicMeet: (page: MeetPage) => void;
  setData: (data: null | Data) => void;
  page: MeetPage;
}) => {
  const renderPage = (
    handleChange: any,
    values: {
      travelMode: string;
      term: string;
      radius: string;
      origin: string;
      destination: string;
    }
  ) => {
    switch (page) {
      case 1:
        return <Page1 />;
      case 2:
        return (
          <Page2
            setMagicMeet={setMagicMeet}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Page3
            data={data}
            hoverbackground={hoverbackground}
            setLocation={setLocation}
            setMagicMeet={setMagicMeet}
          />
        );
      default:
        return <div>Page 1</div>;
    }
  };

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = async (values: {
    travelMode: string;
    term: string;
    radius: string;
    origin: string;
    destination: string;
  }) => {
    setIsLoading(true);

    const { origin, destination, radius, term, travelMode } = values;

    try {
      const response = await fetch(
        `api/venues?origin=${origin}&destination=${destination}&travelMode=${travelMode}&term=${term}&radius=${radius}`
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();

      setData(data);
    } catch (err) {
    } finally {
      setIsLoading(false);
      setMagicMeet(3);
    }
  };

  return (
    <Formik
      initialValues={{
        travelMode: "DRIVING",
        term: "pub",
        radius: "1250",
        origin: "",
        destination: "",
      }}
      onSubmit={(values) => {
        handleClick(values);
      }}
    >
      {({ handleChange, values }) => <> {renderPage(handleChange, values)}</>}
    </Formik>
  );
};

interface Category {
  alias: string;
  title: string;
}

interface Coord {
  latitude: number;
  longitude: number;
}

interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: Coord;
  transactions: [];
  price: string;
  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
  };
  phone: string;
  display_phone: string;
  distance: number;
}

interface Location {
  name: string;
  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
  };
}

interface Data {
  businesses: Business[];
  total: number;
  region: {
    center: {
      longitude: number;
      latitude: number;
    };
  };
}

const Page3 = ({
  data,
  hoverbackground,
  setLocation,
  setMagicMeet,
}: {
  data: Data | null;
  hoverbackground?: string;
  setLocation: (location: Location) => void;
  setMagicMeet: (page: MeetPage) => void;
}) => {
  if (!data || data.total === 0)
    return (
      <div
        style={{
          height: "270px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <button
          onClick={() => setMagicMeet(2)}
          className={styles.plus}
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "50%",
            paddingTop: "2px",
            backgroundColor: hoverbackground,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.60913 0.0634287C4.39082 0.0088505 4.16575 0.12393 4.08218 0.332867L3.1538 2.6538L0.832866 3.58218C0.702884 3.63417 0.604504 3.7437 0.566705 3.87849C0.528906 4.01329 0.555994 4.158 0.639992 4.26999L2.01148 6.09864L1.06343 9.89085C1.00944 10.1068 1.12145 10.3298 1.32691 10.4154L4.20115 11.613L5.62557 13.7496C5.73412 13.9124 5.93545 13.9864 6.12362 13.9327L9.62362 12.9327C9.62988 12.9309 9.63611 12.929 9.64229 12.9269L12.6423 11.9269C12.7923 11.8769 12.905 11.7519 12.9393 11.5976L13.9393 7.09761C13.9776 6.92506 13.9114 6.74605 13.77 6.63999L11.95 5.27499V2.99999C11.95 2.82955 11.8537 2.67373 11.7012 2.5975L8.70124 1.0975C8.67187 1.08282 8.64098 1.07139 8.60913 1.06343L4.60913 0.0634287ZM11.4323 6.01173L12.7748 7.01858L10.2119 9.15429C10.1476 9.20786 10.0995 9.2783 10.0731 9.35769L9.25382 11.8155L7.73849 10.8684C7.52774 10.7367 7.25011 10.8007 7.11839 11.0115C6.98667 11.2222 7.05074 11.4999 7.26149 11.6316L8.40341 12.3453L6.19221 12.9771L4.87441 11.0004C4.82513 10.9265 4.75508 10.8688 4.67307 10.8346L2.03046 9.73352L2.85134 6.44999H4.99999C5.24852 6.44999 5.44999 6.24852 5.44999 5.99999C5.44999 5.75146 5.24852 5.54999 4.99999 5.54999H2.72499L1.7123 4.19974L3.51407 3.47903L6.35769 4.4269C6.53655 4.48652 6.73361 4.42832 6.85138 4.28111L8.62413 2.06518L11.05 3.27811V5.19533L8.83287 6.08218C8.70996 6.13134 8.61494 6.23212 8.57308 6.35769L8.07308 7.85769C7.99449 8.09346 8.12191 8.34831 8.35769 8.4269C8.59346 8.50549 8.84831 8.37807 8.9269 8.14229L9.3609 6.84029L11.4323 6.01173ZM7.71052 1.76648L6.34462 3.47386L4.09505 2.724L4.77192 1.03183L7.71052 1.76648ZM10.2115 11.7885L12.116 11.1537L12.7745 8.19034L10.8864 9.76374L10.2115 11.7885Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            fontWeight: 500,
            color: "var(--gray11)",
          }}
        >
          No locations found! <br /> <br />
          Scrap that and back to the drawing board. <br /> <br /> Try grabbing a
          coffee halfway on a cycle between Shoreditch, London and Kennington,
          London. <br /> <br />
          <div style={{ textAlign: "left", fontSize: "12px" }}>
            Midpoint: {data?.region.center.latitude},{" "}
            {data?.region.center.longitude}
          </div>
        </div>
      </div>
    );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "10px",
        backgroundColor: "var(--gray3)",
        borderRadius: "8px",
        height: "270px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className={styles.smallfont}>MEET IN THE MIDDLE</span>
        <button onClick={() => setMagicMeet(2)} className={styles.plus}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="var(--gray11)"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {data?.businesses.map((value, index) => (
        <div
          key={value.id}
          style={{
            display: "flex",
            gap: 4,
            ["--delay" as any]: `${index * 0.2 + 0.2}s`,
          }}
          className={styles.animate}
        >
          <Avatar.Root
            className="AvatarRoot"
            style={{
              height: "48px",
              width: "48px",
              borderRadius: "50%",
              flex: "none",
            }}
          >
            <Avatar.Image
              className="AvatarImage"
              src={value.image_url}
              alt={"Image of picture from Yelp API for " + value.name}
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              {value.name[0]}
            </Avatar.Fallback>
          </Avatar.Root>

          <Container
            inputColor={hoverbackground ? hoverbackground : ""}
            className={styles.hover}
            onClick={() => {
              setLocation({ name: value.name, location: value.location });
              setMagicMeet(1);
            }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ fontWeight: 500 }}>{value.name}</div>
            <div
              className={styles.nowrap}
              style={{
                fontSize: 12,
                color: "var(--gray11)",
              }}
            >
              {value.location.address1 + ", " + value.location.zip_code}
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
};

const addOpacity = (inputColor: string) => {
  return inputColor + "66";
};

interface ContainerProps {
  inputColor: string;
}

const Container = styled.button<ContainerProps>`
  text-align: left;
  border: none;
  font-family: var(--font-sans-serif);
  cursor: pointer;
  background: none;
  &:hover {
    background: ${(props) => addOpacity(props.inputColor)};
  }
  &:focus {
    background: ${(props) => addOpacity(props.inputColor)};
    outline: none;
  }
`;

const Page1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "270px",
        justifyContent: "space-between",
      }}
    >
      <div className={styles.guestbox}>
        <span>GUESTS</span>
        <Separator.Root className="SeparatorRoot" />
        <div className={styles["space-between"]}>
          <div className={styles.photobox}>
            <Avatar.Root className="AvatarRoot">
              <Avatar.Image
                className="AvatarImage"
                src="Andy.png"
                alt="Andy Brooker"
              />
              <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                AB
              </Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className="AvatarRoot">
              <Avatar.Image
                className="AvatarImage"
                src="Dennis.jpg"
                alt="Dennis Mueller"
              />
              <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                AB
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
          <span className={styles.plus}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                fill="var(--gray11)"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.dates}>
        <div className={styles.datebox + " " + styles.gray3}>
          <span className={styles.subheading}>FROM</span>
          <span className={styles.datetime}>11:00 AM</span>
          <span className={styles.date}>14 Jan 2023</span>
        </div>
        <div className={styles.datebox + " " + styles.gray3}>
          <span className={styles.subheading}>TO</span>
          <span className={styles.datetime}>12:00 PM</span>
          <span className={styles.date}>14 Jan 2023</span>
        </div>
      </div>
      <div className={styles.guestbox}>
        <span>DESCRIPTION</span>
        <div className={styles.w500}>
          Click the Magic Wand icon to meet in the middle. Created with nextJS.
          <br />
          <br />
          Crafted by Andy Brooker.
        </div>
      </div>
    </div>
  );
};

const Page2 = ({
  setMagicMeet,
  values,
  handleChange,
}: {
  setMagicMeet: (page: MeetPage) => void;
  values: {
    travelMode: string;
    term: string;
    radius: string;
    origin: string;
    destination: string;
  };
  handleChange: any;
}) => {
  const travelOptions = [
    {
      value: "DRIVING",
      emoji: "🚗",
      field: "travelMode",
      label: "Car",
      background: "#F7CCCB",
      border: "#E87975",
    },
    {
      value: "BICYCLING",
      emoji: "🚲",
      field: "travelMode",
      label: "Bike",
      background: "#F9E796",
      border: "#F2C24C",
    },
    {
      value: "TRANSIT",
      emoji: "🚆",
      field: "travelMode",
      label: "Transit",
      background: "#B8F2D2",
      border: "#6AD09D",
    },
    {
      value: "WALKING",
      emoji: "🚶",
      field: "travelMode",
      label: "Foot",
      background: "#D5EAFF",
      border: "#64BBF3",
    },
  ];

  const venueOptions = [
    {
      value: "pub",
      emoji: "🍻",
      field: "term",
      label: "Pub",
      background: "#F7CCCB",
      border: "#E87975",
    },
    {
      value: "coffee",
      emoji: "☕",
      field: "term",
      label: "Coffee",
      background: "#F9E796",
      border: "#F2C24C",
    },
    {
      value: "restaurant",
      emoji: "🍲",
      field: "term",
      label: "Food",
      background: "#B8F2D2",
      border: "#6AD09D",
    },
    {
      value: "bars",
      emoji: "🍸",
      field: "term",
      label: "Bars",
      background: "#D5EAFF",
      border: "#64BBF3",
    },
  ];

  const [radius, setRadius] = React.useState<string>("1200");

  return (
    <Form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        height: "270px",
      }}
    >
      <div
        className={styles.guestbox + " " + styles.animate}
        style={{ ["--delay" as any]: "0.2s" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className={styles.smallfont}>MEET IN THE MIDDLE</span>
          <button onClick={() => setMagicMeet(1)} className={styles.plus}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="var(--gray11)"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <Avatar.Root className="AvatarRoot">
                <Avatar.Image
                  className="AvatarImage"
                  src="Andy.png"
                  alt="Andy Brooker"
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                  AB
                </Avatar.Fallback>
              </Avatar.Root>
              <Field
                style={{ flex: 1 }}
                className={styles.input}
                type="text"
                id="origin"
                name="origin"
                placeholder="Where are you?"
              />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Avatar.Root className="AvatarRoot">
                <Avatar.Image
                  className="AvatarImage"
                  src="Dennis.jpg"
                  alt="Dennis Mueller"
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                  DM
                </Avatar.Fallback>
              </Avatar.Root>
              <Field
                style={{ flex: 1 }}
                className={styles.input}
                type="text"
                id="destination"
                name="destination"
                placeholder="Where are they?"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.dates + " " + styles.animate}
        style={{ ["--delay" as any]: "0.4s" }}
      >
        <div style={{ gap: 0 }} className={styles.datebox + " " + styles.gray3}>
          <span className={styles.subheading + " " + styles["mb-10"]}>
            TRAVEL BY
          </span>
          <div
            className={styles.travel}
            role="group"
            aria-labelledby="my-radio-group"
          >
            {travelOptions.map((travelOption, index) => (
              <RadioButton
                key={index + "-" + travelOption}
                value={travelOption.value}
                emoji={travelOption.emoji}
                field={travelOption.field}
                label={travelOption.label}
                background={travelOption.background}
                checkedBorder={travelOption.border}
              />
            ))}
          </div>
        </div>
        <div style={{ gap: 0 }} className={styles.datebox + " " + styles.gray3}>
          <span className={styles.subheading + " " + styles["mb-10"]}>
            VENUE TYPE
          </span>
          <div
            className={styles.travel}
            role="group"
            aria-labelledby="my-radio-group"
          >
            {venueOptions.map((venueOption, index) => (
              <RadioButton
                key={index + "-" + venueOption}
                value={venueOption.value}
                emoji={venueOption.emoji}
                field={venueOption.field}
                label={venueOption.label}
                background={venueOption.background}
                checkedBorder={venueOption.border}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={styles.animate}
        style={{
          display: "flex",
          gap: "4px",
          ["--delay" as any]: "0.6s",
        }}
      >
        <div className={styles.guestbox}>
          <span>RADIUS</span>

          <div
            style={{
              display: "flex",
              gap: "8px",
              fontWeight: 500,
              color: "var(--gray10)",
            }}
          >
            <Field
              name="radius"
              type="range"
              min="500"
              max="2000"
              value={values.radius}
              step="100"
              onChange={handleChange}
              className={styles.slider}
            />
            <div style={{ minWidth: "50px", textAlign: "right" }}>
              {values.radius + "m"}
            </div>
          </div>
        </div>
        <button className={styles.gobtn} type="submit">
          Go!
        </button>
      </div>
    </Form>
  );
};

const RadioButton = ({
  field,
  value,
  emoji,
  label,
  background,
  checkedBorder,
}: {
  field: string;
  value: string;
  emoji: string;
  label: string;
  background: string;
  checkedBorder: string;
}) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px",
        fontSize: "11px",
        fontWeight: 500,
        color: "var(--gray11)",
      }}
    >
      <Field
        type="radio"
        name={field}
        value={value}
        id={value}
        className="radio"
      />
      <div
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: background,
          borderRadius: "50%",
          borderColor: checkedBorder,
          fontSize: "12px",
        }}
      >
        {emoji}
      </div>
    </label>
  );
};

interface Color {
  cssvar: Background;
  background: string;
  border: string;
  boxShadow: BoxShadow;
}

const ColorBar = ({
  toggleColor,
}: {
  toggleColor: (
    background: Background,
    boxShadow: BoxShadow,
    hoverbackground: string
  ) => void;
}) => {
  const colors: Color[] = [
    {
      cssvar: "var(--bg-grey)",
      background: "#E5E5E5",
      border: "2px solid #A3A3A3",
      boxShadow: "var(--box-shadow-grey)",
    },
    {
      cssvar: "var(--bg-red)",
      background: "#F7CCCB",
      border: "2px solid #E87975",
      boxShadow: "var(--box-shadow-red)",
    },
    {
      cssvar: "var(--bg-orange)",
      background: "#F8D9B0",
      border: "2px solid #ED9750",
      boxShadow: "var(--box-shadow-orange)",
    },
    {
      cssvar: "var(--bg-yellow)",
      background: "#F9E796",
      border: "2px solid #F2C24C",
      boxShadow: "var(--box-shadow-yellow)",
    },
    {
      cssvar: "var(--bg-green)",
      background: "#B8F2D2",
      border: "2px solid #6AD09D",
      boxShadow: "var(--box-shadow-green)",
    },
    {
      cssvar: "var(--bg-blue)",
      background: "#D5EAFF",
      border: "2px solid #64BBF3",
      boxShadow: "var(--box-shadow-blue)",
    },
    {
      cssvar: "var(--bg-purple)",
      background: "#DCD6FB",
      border: "2px solid #A48DF4",
      boxShadow: "var(--box-shadow-purple)",
    },
    {
      cssvar: "var(--bg-pink)",
      background: "#F5D2E7",
      border: "2px solid #E47BB4",
      boxShadow: "var(--box-shadow-pink)",
    },
  ];

  const [active, setActive] = React.useState<Background>("var(--bg-blue)");

  return (
    <div className={styles.colorbar}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
          fill="var(--gray11)"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
      <Separator.Root className="SeparatorRoot" orientation="vertical" />
      {colors.map(({ background, border, cssvar, boxShadow }, index) => (
        <div
          key={index}
          className={styles.grow}
          style={{
            height: "22px",
            width: "22px",
            borderRadius: "50%",
            border: active === cssvar ? `2px solid ${background}` : "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => {
              toggleColor(cssvar, boxShadow, background);
              setActive(cssvar);
            }}
            key={cssvar}
            style={{
              backgroundColor: background,
              border: border,
              borderRadius: "8px",
              height: "16px",
              width: "16px",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
