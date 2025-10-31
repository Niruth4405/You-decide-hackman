import React, { useState } from "react";
import { Database, Zap, MapPin, Hash, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for demo
const mockData = {
  campLocation: ["Camp Alpha", "Camp Beta", "Camp Gamma", "Camp Delta", "Camp Epsilon"]
};

// --- Framer Motion Variants ---

// Variant for the whole card to fade in
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Variant for staggering child animations
const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Variant for individual form items
const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

// Variant for the button text
const buttonTextVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 }
};


export default function CreateNlogs() {
  const [number, setNumber] = useState("");
  const [campLocation, setCampLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!number || !campLocation) return;
    
    setIsLoading(true);
    setIsSuccess(false);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setNumber("");
      setCampLocation("");
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to add logs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const SelectField = ({ label, value, onChange, options, placeholder, icon: Icon }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
        {Icon && <Icon size={16} className="text-blue-400" />}
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
      >
        <option value="" className="bg-gray-800">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-800">
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const InputField = ({ label, value, onChange, type = "text", placeholder = "", icon: Icon }) => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
        {Icon && <Icon size={16} className="text-blue-400" />}
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl bg-black-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 backdrop-blur-sm"
      >
        {/* Form Section */}
        <div className="w-full p-8 lg:p-12 text-white flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
           <h1 className="text-4xl font-black mb-4 uppercase tracking-wide text-blue-400 
  drop-shadow-[0_0_10px_rgba(96,165,250,0.7)] 
  hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.9)] transition-all duration-300">
  CREATE BULK LOGS
</h1>

            <p className="text-gray-400">
              Specify the number of logs and location to generate multiple entries instantly.
            </p>
          </motion.div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Form */}
          <motion.div 
            variants={formContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Number of Logs */}
            <motion.div 
              variants={formItemVariants}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700"
            >
              <InputField
                label="Number of Logs"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter number of logs to generate"
                icon={Hash}
              />
              {number && (
                <div className="mt-3 text-sm text-blue-400 flex items-center gap-2">
                  <Sparkles size={14} />
                  <span>Will generate {number} randomized log entries</span>
                </div>
              )}
            </motion.div>

            {/* Camp Location */}
            <motion.div 
              variants={formItemVariants}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700"
            >
              <SelectField
                label="Camp Location"
                value={campLocation}
                onChange={(e) => setCampLocation(e.target.value)}
                options={mockData.campLocation}
                placeholder="Select target camp location"
                icon={MapPin}
              />
              {campLocation && (
                <div className="mt-3 text-sm text-green-400 flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Logs will be assigned to {campLocation}</span>
                </div>
              )}
            </motion.div>

            {/* Info Box */}
            <motion.div 
              variants={formItemVariants}
              className="bg-blue-900 bg-opacity-30 border border-blue-700 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <Database size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-200 font-medium mb-1">Batch Generation Info</p>
                  <p className="text-blue-300 text-xs leading-relaxed">
                    Each log entry will include randomized timestamps, IP addresses, users, devices, 
                    and event types. All entries will be automatically assigned to the selected camp location.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10 pt-6 border-t border-gray-800">
            <motion.button
              onClick={handleSubmit}
              disabled={isLoading || !number || !campLocation}
              whileHover={{ scale: (isLoading || !number || !campLocation) ? 1 : 1.05 }}
              whileTap={{ scale: (isLoading || !number || !campLocation) ? 1 : 0.95 }}
              className={`px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 min-w-[280px] justify-center ${
                isSuccess
                  ? "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/50"
                  : !number || !campLocation
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-500/50 hover:shadow-red-500/70"
              } ${isLoading || (!number || !campLocation) ? "opacity-70" : ""}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  // We use a key to tell Framer to animate when the content changes
                  key={isLoading ? "loading" : isSuccess ? "success" : "default"}
                  variants={buttonTextVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={buttonTextVariants.transition}
                  className="flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating {number} Logs...
                    </>
                  ) : isSuccess ? (
                    <>
                      <Sparkles size={20} />
                      Successfully Generated!
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Generate {number || "N"} Logs
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Stats Preview */}
          <AnimatePresence>
            {number && campLocation && !isLoading && !isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-6 grid grid-cols-3 gap-4"
              >
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400">{number}</div>
                  <div className="text-xs text-gray-400 mt-1">Total Logs</div>
                </div>
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400">~{Math.ceil(Number(number) / 100) || 1}s</div>
                  <div className="text-xs text-gray-400 mt-1">Est. Time</div>
                </div>
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-green-400">1</div>
                  <div className="text-xs text-gray-400 mt-1">Location</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
