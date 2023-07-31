"use client";

import Image from "next/image";
import NextLink from "next/link";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/Games";
import MovieIcon from "@mui/icons-material/Movie";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const drawerWidth = 260;

const drawerNavPages = [
  {
    src: "/",
    name: "Home",
    icon: HomeIcon,
  },
  {
    src: "/games",
    name: "Games",
    icon: GamesIcon,
  },
  {
    src: "/franchises",
    name: "Franchises",
    icon: VideogameAssetIcon,
  },
  {
    src: "/series",
    name: "Series",
    icon: VideogameAssetIcon,
  },
  {
    src: "/videos",
    name: "Videos",
    icon: MovieIcon,
  },
];

const drawerUserPages = [
  {
    src: "/list",
    name: "My List",
    icon: FormatListBulletedIcon,
  },
  {
    src: "/profile",
    name: "My Profile",
    icon: AccountCircleIcon,
  },
  {
    src: "/settings",
    name: "Settings",
    icon: SettingsIcon,
  },
];

export default function SearchAppBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchInput = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      router.push(`/search?q=${search.replaceAll("\\", "")}`);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: 1,
          }}
        >
          <Image src="/icon.svg" alt="MVGL Brand Icon" width={30} height={30} />
          MyVideoGameList
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {drawerNavPages.map((link, i) => (
          <ListItem disablePadding key={i}>
            <ListItemButton LinkComponent={NextLink} href={link.src}>
              <ListItemIcon>
                <link.icon />
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {drawerUserPages.map((link, i) => (
          <ListItem disablePadding key={i}>
            <ListItemButton LinkComponent={NextLink} href={link.src}>
              <ListItemIcon>
                <link.icon />
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              gap: 1,
            }}
          >
            <Image
              src="/icon.svg"
              alt="MVGL Brand Icon"
              width={30}
              height={30}
            />
            MyVideoGameList
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search games…"
              inputProps={{ "aria-label": "search games" }}
              value={search}
              onKeyDown={handleSearchInput}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="home games franchises series profile settings"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
