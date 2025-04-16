
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-500">Total projects</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm text-gray-500">Completed tutorials</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bookmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-gray-500">Saved resources</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium">Completed "State Management" tutorial</p>
                <p className="text-sm text-gray-500">Yesterday at 2:30 PM</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Started "Flutter Animations" course</p>
                <p className="text-sm text-gray-500">Apr 14, 2025 at 10:15 AM</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Bookmarked "Flutter Architecture" article</p>
                <p className="text-sm text-gray-500">Apr 12, 2025 at 4:45 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
