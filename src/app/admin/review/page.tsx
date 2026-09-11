import React from 'react';
import Header from '@/components/common/Header';
import { formatNaira } from '@/lib/utils';
import { ShieldCheck, Check, X, FileText, AlertTriangle, Eye } from 'lucide-react';

export default function AdminReviewPage() {
  const pendingApplications = [
    {
      id: 'APP-2026-904',
      applicant: 'Ilemona Sule',
      type: 'Payday Loan',
      amount: 500000,
      monthlyIncome: 350000,
      bvnStatus: 'Verified',
      riskScore: 'Low (820)',
      date: 'Sep 11, 2026',
    },
    {
      id: 'APP-2026-905',
      applicant: 'Amina Bello',
      type: 'SME Working Capital',
      amount: 3500000,
      monthlyIncome: 1200000,
      bvnStatus: 'Verified',
      riskScore: 'Medium (710)',
      date: 'Sep 11, 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Internal Underwriting Engine</span>
          <h1 className="text-3xl font-black text-slate-900 mt-1">Loan Assessment Queue</h1>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="p-4 pl-6">Ref ID</th>
                  <th className="p-4">Applicant</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Requested</th>
                  <th className="p-4">Income</th>
                  <th className="p-4">Risk Score</th>
                  <th className="p-4 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {pendingApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 pl-6 font-mono font-bold text-blue-600">{app.id}</td>
                    <td className="p-4 font-bold text-slate-900">{app.applicant}</td>
                    <td className="p-4">{app.type}</td>
                    <td className="p-4 font-bold text-slate-900">{formatNaira(app.amount)}</td>
                    <td className="p-4">{formatNaira(app.monthlyIncome)}/mo</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {app.riskScore}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right space-x-2">
                      <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition" title="View Documents">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm transition">
                        Approve
                      </button>
                      <button className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg shadow-sm transition">
                        Decline
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}