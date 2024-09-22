import type {Navigation} from "@toolpad/core";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon/>,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon/>,
    children: [
      {
        segment: 'charts',
        title: 'Charts',
        icon: <DescriptionIcon/>,
      },
      {
        segment: 'top5',
        title: 'Top 5 PL accounts',
        icon: <DescriptionIcon/>,
      },
      {
        segment: 'grouped',
        title: 'Grouped report',
        icon: <DescriptionIcon/>,
      },
    ],
  }
];
