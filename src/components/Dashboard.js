import React from 'react';
import { ProductsTable } from './ProductsTable';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useTheme,
  List,
  ListItem,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const metrics = [
  {
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    trend: 'up',
    lightBg: '#E3F5FF',
    darkBg: '#E3F5FF',
    textColor: '#181A20'
  },
  {
    title: 'Orders',
    value: '1,219',
    change: '-0.03%',
    trend: 'down',
    lightBg: '#F7F9FB',
    darkBg: '#23272F',
    textColor: '#FFF'
  },
  {
    title: 'Revenue',
    value: '$695',
    change: '+15.03%',
    trend: 'up',
    lightBg: '#F7F9FB',
    darkBg: '#23272F',
    textColor: '#FFF'
  },
  {
    title: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    trend: 'up',
    lightBg: '#E5ECF6',
    darkBg: '#E5ECF6',
    textColor: '#181A20'
  }
];

const datas = [
  { month: 'Jan', projection: 20, actual: 16 },
  { month: 'Feb', projection: 25, actual: 23 },
  { month: 'Mar', projection: 22, actual: 18 },
  { month: 'Apr', projection: 28, actual: 22 },
  { month: 'May', projection: 18, actual: 15 },
  { month: 'Jun', projection: 26, actual: 24 }
];

const data = [
  { month: 'Jan', current: 12000000, previous: 8000000 },
  { month: 'Feb', current: 9000000, previous: 15000000 },
  { month: 'Mar', current: 8000000, previous: 16000000 },
  { month: 'Apr', current: 13000000, previous: 12000000 },
  { month: 'May', current: 18000000, previous: 10000000 },
  { month: 'Jun', current: 20000000, previous: 23000000 },
];

const locations = [
  { name: "New York", value: 72, left: "35%", top: "42%" },
  { name: "San Francisco", value: 39, left: "10%", top: "40%" },
  { name: "Sydney", value: 25, left: "86%", top: "78%" },
  { name: "Singapore", value: 61, left: "78%", top: "53%" },
];

const salesData = [
  { name: 'Direct', value: 350.56, lightColor: '#1C1C1C', darkColor: '#EE4E8B' },
  { name: 'Affiliate', value: 315.18, lightColor: '#BAEDBD', darkColor: '#BAEDBD' },
  { name: 'Sponsored', value: 194.02, lightColor: '#95A4FC', darkColor: '#95A4FC' },
  { name: 'E-mail', value: 48.96, lightColor: '#B1E3FF', darkColor: '#B1E3FF' }
];

const formatYAxisTick = (value) => value >= 1000000 ? `${value / 1000000}M` : value;

export function Dashboard() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ marginBottom: 3, fontWeight: 600, color: isDark ? '#FFF' : '#181A20' }}
      >
        eCommerce
      </Typography>
      <Grid container spacing={2} direction="row">
        {/* Cards Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
            width: "100%",
          }}
        >
          {/* Metrics Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            {metrics.map((metric, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: isDark ? metric.darkBg : metric.lightBg,
                  color: metric.textColor,
                  border: "none",
                  boxShadow: isDark
                    ? "0 1px 3px rgba(0,0,0,0.7)"
                    : "0 1px 3px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "translateY(-2px)",
                    boxShadow: isDark
                      ? "0 4px 12px rgba(0,0,0,0.85)"
                      : "0 4px 12px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ padding: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark && metric.darkBg === '#23272F' ? '#B0B0B0' : '#181A20',
                          marginBottom: 1,
                          fontSize: '1.100rem',
                          fontWeight: 600,
                        }}
                      >
                        {metric.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          color: metric.textColor,
                          fontWeight: 600,
                          fontSize: "1.75rem"
                        }}
                      >
                        {metric.value}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      {metric.trend === "up"
                        ? <TrendingUpIcon sx={{ color: "#4caf50", fontSize: 16 }} />
                        : <TrendingDownIcon sx={{ color: "#f44336", fontSize: 16 }} />}
                      <Typography
                        variant="body2"
                        sx={{
                          color: metric.trend === "up" ? "#4caf50" : "#f44336",
                          fontWeight: 600,
                          fontSize: "0.8125rem",
                        }}
                      >
                        {metric.change}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
          {/* Right column - projections card */}
          <Box>
            <Card
              sx={{
                backgroundColor: isDark ? '#23272F' : '#F7F9FB',
                color: isDark ? '#FFF' : '#181A20',
                width: '100%',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    marginBottom: 2,
                    color: isDark ? '#FFF' : '#181A20'
                  }}
                >
                  Projections vs Actuals
                </Typography>
                <Box sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "stretch",
                  height: 200,
                  position: "relative"
                }}>
                  {/* Y-Axis labels */}
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    fontSize: 12,
                    color: isDark ? "rgba(255,255,255,0.7)" : "rgba(28,28,28,0.4)",
                    fontWeight: 400,
                    pt: 2, pb: 3.5, minWidth: "30px"
                  }}>
                    <div>30M</div>
                    <div>20M</div>
                    <div>10M</div>
                    <div>0</div>
                  </Box>
                  {/* Chart Bars */}
                  <Box sx={{ flex: 1, position: "relative", pt: 2, pb: 3.5 }}>
                    {/* Grid Lines */}
                    <Box sx={{
                      position: "absolute",
                      top: "16px",
                      left: 0,
                      right: 0,
                      bottom: "28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}>
                      {[0.05,0.05,0.05,0.2].map((opacity, i) => (
                        <Box
                          key={i}
                          sx={{
                            height: "1px",
                            backgroundColor: isDark ? "#FFF" : "rgba(28,28,28,1)",
                            opacity: opacity
                          }}
                        />
                      ))}
                    </Box>
                    {/* Projection/Actual Bars */}
                    <Box sx={{
                      position: "absolute",
                      top: "16px",
                      left: 0,
                      right: 0,
                      bottom: "28px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      px: 2,
                    }}>
                      {datas.map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            height: "100%",
                            position: "relative"
                          }}
                        >
                          <Box sx={{
                            width: "20px",
                            backgroundColor: "#a8c5da",
                            opacity: 0.5,
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "4px",
                            height: `${(item.projection / 30) * 100}%`,
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)"
                          }} />
                          <Box sx={{
                            width: "20px",
                            backgroundColor: "#6A8FA5",
                            opacity: 1,
                            borderTopLeftRadius: "4px",
                            borderTopRightRadius: "4px",
                            height: `${(item.actual / 30) * 100}%`,
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)"
                          }} />
                        </Box>
                      ))}
                    </Box>
                    {/* X-Axis labels */}
                    <Box sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "16px",
                      right: "16px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                      color: isDark ? "rgba(255,255,255,0.7)" : "rgba(28,28,28,0.4)",
                      fontWeight: 400
                    }}>
                      {datas.map((item, index) => (
                        <Box key={index} sx={{ flex: 1, textAlign: "center", lineHeight: "18px" }}>
                          {item.month}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Revenue Chart & Location Row */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 2,
          width: "100%"
        }}>
          {/* Revenue Line Chart */}
          <Card sx={{
            height: 430,
            backgroundColor: isDark ? '#23272F' : '#F7F9FB',
            color: isDark ? "#FFF" : "#181A20",
            width: "100%"
          }}>
            <CardContent>
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
                flexWrap: "wrap",
                gap: 2,
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: isDark ? '#FFF' : "#181A20"
                  }}
                >
                  Revenue
                </Typography>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: isDark ? "#FFF" : "#000"
                    }} />
                    <Typography variant="body2" sx={{ color: isDark ? "#B0B0B0" : "#666" }}>Current Week <span style={{ fontWeight: 600, color: isDark ? "#FFF" : "#181A20" }}>$58,211</span>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#95A4FC"
                    }} />
                    <Typography variant="body2" sx={{ color: isDark ? "#B0B0B0" : "#666" }}>Previous Week <span style={{ fontWeight: 600, color: isDark ? "#FFF" : "#181A20" }}>$68,768</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ height: 300, width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: isDark ? "#FFF" : "#999999" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: isDark ? "#FFF" : "#999999" }}
                      tickFormatter={formatYAxisTick}
                      domain={[0, 30000000]}
                      ticks={[0, 10000000, 20000000, 30000000]}
                    />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke={isDark ? "#FFF" : "#000"}
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#95A4FC"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
          {/* Revenue by Location */}
          <Card sx={{
            p: 2,
            backgroundColor: isDark ? "#23272F" : "#F7F9FB",
            color: isDark ? "#FFF" : "#181A20",
            width: "100%"
          }}>
            <Typography
              variant="h6"
              sx={{
                marginBottom: 2,
                fontWeight: 600,
                fontSize: "14px",
                color: isDark ? "#FFF" : "#181A20",
                textAlign: "left"
              }}
            >
              Revenue by Location
            </Typography>
            <CardContent>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 120,
                  backgroundImage: 
                     "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              >
                {locations.map((loc) => (
                  <Box
                    key={loc.name}
                    sx={{
                      position: "absolute",
                      top: loc.top,
                      left: loc.left,
                      transform: "translate(-50%,-50%)",
                      width: 10, height: 10,
                      borderRadius: "50%",
                      backgroundColor: "#4a90e2",
                      border: "2px solid #fff",
                      boxShadow: "0 0 4px rgba(0,0,0,0.15)"
                    }}
                  />
                ))}
              </Box>
              <Box mt={2}>
                {locations.map((loc) => (
                  <Box key={loc.name} display="flex" flexDirection="column" mb={2}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body1" sx={{ color: isDark ? "#FFF" : "#181A20" }}>
                        {loc.name}
                      </Typography>
                      <Typography variant="body1" fontWeight="bold" sx={{ color: isDark ? "#FFF" : "#181A20" }}>
                        {loc.value}K
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={loc.value}
                      sx={{
                        height: 4,
                        borderRadius: 5,
                        backgroundColor: isDark ? "#383B42" : "#E0E0E0",
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: "#b3d4f5"
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Table + Pie chart */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 2, width: "100%", alignItems: "stretch"
        }}>
          <Box sx={{ width: "100%" }}>
            <ProductsTable />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Card sx={{
              height: "100%", backgroundColor: isDark ? "#23272F" : "#F7F9FB",
              color: isDark ? "#FFF" : "#181A20", width: "100%"
            }}>
              <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: 2,
                    fontWeight: 600,
                    fontSize: "14px",
                    textAlign: "left",
                    color: isDark ? "#FFF" : "#181A20"
                  }}>
                  Total Sales
                </Typography>
                <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={salesData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {salesData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={isDark ? entry.darkColor : entry.lightColor}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
                <Box sx={{ marginTop: 2, textAlign: "left" }}>
                  <List dense sx={{ padding: 0 }}>
                    {salesData.map((item) => (
                      <ListItem
                        key={item.name}
                        sx={{
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0.5,
                          paddingBottom: 0.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: isDark ? item.darkColor : item.lightColor,
                              marginRight: 1
                            }}
                          />
                          <Typography variant="body2" sx={{ fontSize: "0.875rem", color: isDark ? "#FFF" : "#181A20" }}>{item.name}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: isDark ? "#FFF" : "#181A20" }}>${item.value}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
