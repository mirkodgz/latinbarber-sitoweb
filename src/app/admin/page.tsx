import RevenueForecast from "../components/dashboard/RevenueForecast";
import NewCustomers from "../components/dashboard/NewCustomers";
import TotalIncome from "../components/dashboard/TotalIncome";
import DailyActivity from "../components/dashboard/DailyActivity";

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        
        {/* Main Stats Row */}
        <div className="lg:col-span-8 col-span-12">
          <RevenueForecast />
        </div>
        
        <div className="lg:col-span-4 col-span-12 flex flex-col gap-8">
           <NewCustomers />
           <TotalIncome />
        </div>

        {/* Secondary Row */}
        <div className="lg:col-span-12 col-span-12">
          <DailyActivity />
        </div>

        <div className="col-span-12 text-center py-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LatinBarber Studio - Sistema de Gestión Administrativa
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
