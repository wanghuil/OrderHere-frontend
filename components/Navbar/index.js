import styled from '@emotion/styled';
import Image from 'next/legacy/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
  InputAdornment,
  ButtonBase,
  Badge,
} from '@mui/material';
import AccountButton from './AccountButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

export const styleNew = {
  title: {
    color: '#FFF',
    fontFamily: 'Playfair Display',
    fontSize: '35px',
    fontStyle: 'italic',
    fontWeight: 600,
    lineHeight: '29.333px',
    letterSpacing: '-0.4px',
  },
};

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
        boxShadow: theme.shadows[3],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        boxShadow: 'none',
      }),
}));

const Navbar = () => {
  const router = useRouter();
  const isHomeActive = router.pathname === '/';
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));
  const { isLogin } = useSelector((state) => state.sign);
  const { totalItems } = useSelector((state) => state.cart);
 
  return (
    <NavbarRoot>
      <Toolbar
        disableGutters
        sx={{
          height: 80,
          left: 0,
          pl: 3,
          pr: mobileDevice ? 3 : 5,
        }}
      >
        <>
          <NextLink href="/" passHref>
            <Box
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginRight: '20px',
                marginBottom: '20px',
              }}
            >
              <Image
                src="/image/Logo-Nav.png"
                width="348px"
                height="80px"
                alt="logo-nav"
              />
            </Box>
          </NextLink>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/" passHref>
              <Button
                sx={{
                  display: 'inline-flex',
                  padding: '4px 16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '10px',
                  color: 'black',
                  borderRadius: 10,
                  backgroundColor: isHomeActive ? '#DBDFD0' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                {' '}
                Home
              </Button>
            </Link>

            <Button
              sx={{
                display: 'inline-flex',
                padding: '4px 16px',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                borderRadius: 10,
              }}
            >
              Store Info
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{ marginRight: '20px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* <>
            {isLogin || <Sign />}
            <AccountButton isLogin={isLogin} />
          </> */}
          <AccountButton isLogin={isLogin} />
        </>
        <Link href="/cart" passHref>
          <ButtonBase sx={{ padding: '10px', color: 'black' }}>
            {totalItems > 0 ? (
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            ) : (
              <ShoppingCartIcon fontSize="large" />
            )}
          </ButtonBase>
        </Link>
      </Toolbar>
    </NavbarRoot>
  );
};

export default Navbar;
