/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, DragEvent, ChangeEvent, FormEvent } from 'react';
import { NavSection } from '../types';
import { CAREERS_VACANCIES } from '../data';
import { 
  CheckCircle2, Briefcase, MapPin, Calendar, 
  ChevronDown, ChevronUp, Upload, Send, Trash2, HelpCircle
} from 'lucide-react';

interface CareersViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function CareersView({ onNavigate }: CareersViewProps) {
  
  // Track expanded vacancies
  const [expandedJobId, setExpandedJobId] = useState<string | null>('qc-manager');

  // Form states
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: ''
  });

  // Resume states
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelected(files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelected(files[0]);
    }
  };

  const handleFileSelected = (file: File) => {
    // Validate file type (PDF/Word) & size (<5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File exceeds 5MB limit. Please upload a smaller file.');
      return;
    }
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only PDF and Word (.doc/.docx) files are supported.');
      return;
    }

    setResumeFile(file);
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  const removeResume = () => {
    setResumeFile(null);
    setUploadProgress(null);
  };

  const handleJobSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      alert('Please upload your resume file.');
      return;
    }
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setApplicantForm({
        name: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: ''
      });
      setResumeFile(null);
      setUploadProgress(null);
    }, 6000);
  };

  const toggleJob = (id: string) => {
    setExpandedJobId(prev => (prev === id ? null : id));
  };

  const benefits = [
    { title: 'Subsidized Food & Cafeteria', desc: 'Enjoy fresh, healthy meals cooked daily in our cleanroom cafeteria.' },
    { title: 'Medical Cover & Life Insurance', desc: 'Full medical coverage for you and your direct dependents, with premium life covers.' },
    { title: 'Continuous Training Modules', desc: 'Sponsored technical certifications in mechatronics, lab chemistry, and logistics.' },
    { title: 'Equal Opportunity Workplace', desc: 'An inclusive professional space with flexible shifting hours and strong safety protocols.' }
  ];

  return (
    <div className="relative">
      
      {/* Visual Page Header */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-secondary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/15 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
            Careers & Culture
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Build Your Industrial Career With Us
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            We are looking for passionate biochemists, automation mechatronic experts, and corporate managers. Join our mission of water purity.
          </p>
        </div>
      </section>

      {/* Careers Core listing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* Vacancies List */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-2">Available Openings</span>
              <h2 className="font-display font-bold text-3xl text-brand-secondary mb-6 leading-tight">
                Current Professional Opportunities
              </h2>

              <div className="space-y-4">
                {CAREERS_VACANCIES.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <div 
                      key={job.id}
                      className={`border rounded-2xl transition-all overflow-hidden ${
                        isExpanded ? 'border-brand-primary bg-slate-50/50 shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {/* Header Summary */}
                      <div 
                        onClick={() => toggleJob(job.id)}
                        className="p-6 flex justify-between items-center cursor-pointer select-none"
                      >
                        <div className="space-y-2">
                          <h3 className="font-display font-bold text-base sm:text-lg text-brand-secondary">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-mono">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4 text-brand-primary" /> {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-brand-accent" /> {job.location}
                            </span>
                          </div>
                        </div>
                        <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-brand-primary/10 text-slate-600 hover:text-brand-primary transition-colors">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="p-6 pt-0 border-t border-slate-100 space-y-5 text-sm text-slate-600">
                          
                          <div className="space-y-2 pt-4">
                            <h4 className="font-bold text-brand-secondary">Core Experience Needed:</h4>
                            <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-brand-primary font-mono">{job.experience}</span>
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-bold text-brand-secondary">Role Description:</h4>
                            <p className="text-xs leading-relaxed">{job.description}</p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-bold text-brand-secondary">Key Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs font-light">
                              {job.responsibilities.map((r, idx) => (
                                <li key={idx}>{r}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-bold text-brand-secondary">Qualifications & Skills Required:</h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs font-light">
                              {job.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-slate-200/80">
                            <button
                              onClick={() => {
                                setApplicantForm(prev => ({ ...prev, position: job.title }));
                                document.getElementById('career-application-form')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="px-5 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-secondary transition-all cursor-pointer"
                            >
                              Apply For This Role
                            </button>
                          </div>

                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Cultural Benefits Side Panel */}
            <div className="lg:col-span-5 space-y-6 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl">
              <h3 className="font-display font-bold text-lg text-brand-secondary mb-4">Why Work at Bhagirathi</h3>
              <div className="space-y-6">
                {benefits.map((b, idx) => (
                  <div key={idx} className="space-y-1 text-left">
                    <strong className="text-sm text-brand-primary block">{b.title}</strong>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* APPLICATION FORM BLOCK (Interactive file upload) */}
          <div id="career-application-form" className="mt-20 border-t border-slate-100 pt-16">
            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm text-left space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-brand-accent uppercase block tracking-wider">Join the plant</span>
                <h3 className="font-display font-bold text-2xl text-brand-secondary">Submit Your Professional Application</h3>
                <p className="text-slate-500 text-xs">Fill out your details, attach a PDF resume, and our human resources department will evaluate your profile.</p>
              </div>

              <form onSubmit={handleJobSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Full Name</label>
                    <input
                      type="text"
                      value={applicantForm.name}
                      onChange={e => setApplicantForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                      placeholder="E.g. Dr. Anand Kulkarni"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Corporate Email Address</label>
                    <input
                      type="email"
                      value={applicantForm.email}
                      onChange={e => setApplicantForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Contact Phone Number</label>
                    <input
                      type="tel"
                      value={applicantForm.phone}
                      onChange={e => setApplicantForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Target Vacancy Profile</label>
                    <select
                      value={applicantForm.position}
                      onChange={e => setApplicantForm(prev => ({ ...prev, position: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                      required
                    >
                      <option value="">Select target role...</option>
                      {CAREERS_VACANCIES.map(v => (
                        <option key={v.id} value={v.title}>{v.title}</option>
                      ))}
                      <option value="General Spontaneous Application">General Spontaneous Application</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Professional Introduction & Pitch</label>
                  <textarea
                    rows={4}
                    value={applicantForm.coverLetter}
                    onChange={e => setApplicantForm(prev => ({ ...prev, coverLetter: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    placeholder="Briefly describe your chemical or mechatronic bottling expertise..."
                    required
                  />
                </div>

                {/* DRAG AND DROP FILE UPLOADER */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">Upload Corporate Resume (PDF or Word, max 5MB)</label>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                      isDragOver
                        ? 'border-brand-primary bg-brand-primary/5'
                        : 'border-slate-300 hover:border-brand-primary bg-white hover:bg-slate-50/30'
                    }`}
                  >
                    <input
                      type="file"
                      id="file-resume"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                    
                    <label htmlFor="file-resume" className="cursor-pointer space-y-3 block w-full">
                      <div className="p-3 bg-slate-50 border rounded-xl w-fit mx-auto text-slate-500">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold block text-slate-700">Drag & Drop Resume File Here</span>
                        <span className="text-[10px] text-slate-400 block">Or click to select a file from local explorer</span>
                      </div>
                    </label>

                  </div>

                  {/* Resume upload state */}
                  {resumeFile && (
                    <div className="p-4 bg-white border rounded-xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <Briefcase className="w-5 h-5 text-brand-primary" />
                        <div>
                          <strong className="text-xs block text-slate-800">{resumeFile.name}</strong>
                          <span className="text-[10px] text-slate-400 block font-mono">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                      </div>

                      {uploadProgress !== null && uploadProgress < 100 ? (
                        <div className="flex items-center gap-2 font-mono text-[10px] text-brand-accent">
                          <span>Uploading {uploadProgress}%</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={removeResume}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-secondary hover:bg-brand-primary text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Resume Profile
                    <Send className="w-4 h-4 text-brand-accent" />
                  </button>
                </div>

                {submitSuccess && (
                  <div className="p-4 bg-brand-accent/15 border border-brand-accent/30 rounded-2xl flex items-start gap-2.5 text-brand-accent text-xs font-semibold">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Application Transmitted Successfully</span>
                      <span className="font-normal text-slate-600">Our HR coordinator has received your resume and introduction letter. We will audit credentials and call you back shortly.</span>
                    </div>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
