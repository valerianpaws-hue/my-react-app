import React, { useState } from 'react';
import { dynasties, type Dynasty } from './data/dynasties';
import { History, MapPin, Calendar } from 'lucide-react';

function App() {
  const [selectedDynasty, setSelectedDynasty] = useState<Dynasty | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-8">
          中国历史朝代查询
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dynasty Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">选择朝代</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {dynasties.map((dynasty) => (
                <button
                  key={dynasty.name}
                  onClick={() => setSelectedDynasty(dynasty)}
                  className={`p-3 rounded-lg transition-all ${
                    selectedDynasty?.name === dynasty.name
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900'
                  }`}
                >
                  {dynasty.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dynasty Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">朝代信息</h2>
            {selectedDynasty ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <History className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">朝代</h3>
                    <p className="text-xl text-gray-900">{selectedDynasty.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">起讫时间</h3>
                    <p className="text-xl text-gray-900">{selectedDynasty.period}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">都城</h3>
                    <p className="text-xl text-gray-900">{selectedDynasty.capital}</p>
                    <p className="text-gray-600">{selectedDynasty.location}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                请选择一个朝代以查看详细信息
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;