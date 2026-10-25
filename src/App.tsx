/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_TOPICS } from './data/topics';

export default function App() {
  const [selectedId, setSelectedId] = useState<string>('t6');

  const activeTopic =
    INITIAL_TOPICS.find((t) => t.id === selectedId) || INITIAL_TOPICS[0];

  return (
    <div className="min-h-screen bg-[#EEF2EB] text-[#223026] px-3 py-4 sm:px-6 sm:py-8">
      <div className="max-w-xl mx-auto">
        {/* HÀNG ĐẦU TIÊN: 6 nút 題組六 -> 題組一 nằm gọn trên 1 hàng */}
        <div className="bg-[#FAFBF9] border border-[#D4DFCF] rounded-xl p-1.5 sm:p-2 shadow-xs">
          <div className="grid grid-cols-6 gap-1 sm:gap-2">
            {INITIAL_TOPICS.map((topic) => {
              const isSelected = selectedId === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  className={`min-h-[44px] sm:min-h-[48px] px-1 sm:px-3 py-2 rounded-lg font-bold text-xs sm:text-base transition-colors cursor-pointer whitespace-nowrap select-none ${
                    isSelected
                      ? 'bg-[#356854] text-white'
                      : 'bg-[#EEF3EC] text-[#2B3D32] hover:bg-[#E0E9DC] active:bg-[#D4E0CF]'
                  }`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* DANH SÁCH 13 MỤC XỔ RA NGAY BÊN DƯỚI */}
        <div className="mt-3 bg-[#FAFBF9] border border-[#D4DFCF] rounded-xl overflow-hidden shadow-xs divide-y divide-[#E6ECE2]">
          {activeTopic.items.map((item) => {
            const hasSubLinks = item.subLinks && item.subLinks.length > 0;
            const hasUrl = item.url && item.url.trim() !== '';

            // Mục chia ra 1 và 2 (Access 資料整合 ở 題組四 và 題組三)
            if (hasSubLinks) {
              return (
                <div
                  key={item.id}
                  className="min-h-[50px] px-4 sm:px-5 py-3 flex items-center justify-between gap-3"
                >
                  <span className="font-semibold text-base sm:text-[17px]">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.subLinks!.map((sub) => (
                      <a
                        key={sub.url}
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[34px] px-3.5 py-1 rounded-lg bg-[#356854] hover:bg-[#2B5645] active:bg-[#224537] text-white font-bold text-sm inline-flex items-center justify-center transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            // Mục có link: Nhấn thẳng vào tên mục là chuyển qua YouTube
            if (hasUrl) {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] px-4 sm:px-5 py-3 flex items-center hover:bg-[#EAF1E7] active:bg-[#DFE9DC] transition-colors font-semibold text-base sm:text-[17px] text-[#1E3328] hover:text-[#265C47]"
                >
                  {item.title}
                </a>
              );
            }

            // Mục không có link
            return (
              <div
                key={item.id}
                className="min-h-[50px] px-4 sm:px-5 py-3 flex items-center font-medium text-base sm:text-[17px] text-[#88968C]"
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
