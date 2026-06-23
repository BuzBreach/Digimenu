'use client';

import React, { useEffect, useState } from 'react';
import { usePOSStore } from '../../store/usePOSStore';
import { getSocket } from '../../utils/socket';
import { CategoryIcon } from '../../components/CategoryNav';
import { formatCurrency } from '../../utils/currency';
import {
  TrendingUp,
  ShoppingBag,
  Users,
  Grid,
  List,
  Edit2,
  Trash2,
  Plus,
  Lock,
  LogOut,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  UtensilsCrossed,
  GlassWater,
  IndianRupee,
  Monitor,
  ExternalLink,
  ReceiptText,
  QrCode,
  Clock
} from 'lucide-react';

type AdminTab = 'hub' | 'analytics' | 'orders' | 'categories' | 'items' | 'customers' | 'operations' | 'staff';
type AddOnRow = { name: string; price: string };

export default function AdminDashboard() {
  const { adminToken, adminUser, setAdminAuth, logoutAdmin } = usePOSStore();
  const formatLocalDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Tab State: hub, analytics, orders, categories, items, customers, operations, staff
  const [activeTab, setActiveTab] = useState<AdminTab>('hub');
  
  // Data States
  const [analytics, setAnalytics] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState<'ALL' | 'PENDING' | 'PREPARING' | 'READY' | 'SERVED' | 'CANCELLED'>('ALL');
  const [categories, setCategories] = useState<any[]>([]);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [dailyClose, setDailyClose] = useState<any>(null);
  const [tableOccupancy, setTableOccupancy] = useState<any>(null);
  const [staffUsers, setStaffUsers] = useState<any[]>([]);
  const [staffAttendance, setStaffAttendance] = useState<any>(null);
  const [systemStatus, setSystemStatus] = useState<any>(null);
  const [feedbackRows, setFeedbackRows] = useState<any[]>([]);
  const [inventoryTransactions, setInventoryTransactions] = useState<any[]>([]);
  const [cafeSettings, setCafeSettings] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);
  const [operationMessage, setOperationMessage] = useState('');

  // Login States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Edit / Add Form States
  const [showCatModal, setShowCatModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState<any>(null);
  const [catName, setCatName] = useState('');
  const [catIcon, setCatIcon] = useState('Sparkles');
  const [catSortOrder, setCatSortOrder] = useState(0);

  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [itemVeg, setItemVeg] = useState(true);
  const [itemAvail, setItemAvail] = useState(true);
  const [itemCatId, setItemCatId] = useState('');
  const [itemQueue, setItemQueue] = useState<'KITCHEN' | 'BAR'>('KITCHEN');
  const [itemAddOns, setItemAddOns] = useState<AddOnRow[]>([]);
  const [itemImage, setItemImage] = useState('');
  const [itemTrackStock, setItemTrackStock] = useState(false);
  const [itemStockQty, setItemStockQty] = useState<number | ''>('');
  const [itemLowStockAt, setItemLowStockAt] = useState(5);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [staffUsername, setStaffUsername] = useState('');
  const [staffPassword, setStaffPassword] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffRole, setStaffRole] = useState('STAFF');
  const todayKey = formatLocalDateKey(new Date());
  const defaultFromDate = new Date();
  defaultFromDate.setDate(defaultFromDate.getDate() - 29);
  const [attendanceFrom, setAttendanceFrom] = useState(formatLocalDateKey(defaultFromDate));
  const [attendanceTo, setAttendanceTo] = useState(todayKey);
  const [inventoryItemId, setInventoryItemId] = useState('');
  const [inventoryType, setInventoryType] = useState('PURCHASE');
  const [inventoryQty, setInventoryQty] = useState(1);
  const [inventoryNote, setInventoryNote] = useState('');

  // Sockets & Fetch logic
  const getServerUrl = () => {
    const host = typeof window === 'undefined' ? 'localhost' : window.location.hostname;
    return `http://${host}:5000`;
  };

  const fetchAdminJson = async (path: string, setter: (data: any) => void) => {
    const serverUrl = getServerUrl();
    const res = await fetch(`${serverUrl}${path}`, {
      headers: { Authorization: `Bearer ${adminToken}` },
      cache: 'no-store',
    });
    if (res.status === 400 || res.status === 401) {
      logoutAdmin();
      throw new Error('Session expired. Please sign in again.');
    }
    if (res.ok) setter(await res.json());
  };

  const fetchAllData = async (section: AdminTab = activeTab) => {
    if (!adminToken) return;
    setLoading(true);
    try {
      const jobs: Array<Promise<void>> = [
        fetchAdminJson('/api/admin/analytics', setAnalytics),
        fetchAdminJson('/api/admin/orders?limit=25', setOrders),
        fetchAdminJson('/api/admin/categories', setCategories),
        fetchAdminJson('/api/admin/menu-items', setMenuItems),
      ];

      if (section === 'operations') {
        jobs.push(
          fetchAdminJson('/api/admin/reports/daily-close', setDailyClose),
          fetchAdminJson('/api/admin/tables/occupancy', setTableOccupancy),
          fetchAdminJson('/api/admin/system/status', setSystemStatus),
          fetchAdminJson('/api/admin/feedback', setFeedbackRows),
          fetchAdminJson('/api/admin/inventory/transactions', setInventoryTransactions),
          fetchAdminJson('/api/admin/settings', setCafeSettings),
        );
      }

      if (section === 'staff') {
        jobs.push(
          fetchAdminJson('/api/admin/users', setStaffUsers),
          fetchAdminJson('/api/admin/staff/attendance', setStaffAttendance),
        );
      }

      await Promise.all(jobs);

      setLastSyncedAt(new Date());
      setError('');
    } catch (err) {
      console.error(err);
      setError('Connection failure to central POS local server.');
    } finally {
      setLoading(false);
    }
  };

  const fetchStaffAttendance = async () => {
    if (!adminToken) return;
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/staff/attendance`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        cache: 'no-store',
      });
      if (res.ok) setStaffAttendance(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (adminToken) {
      const socket = getSocket();
      
      // Live sync notifications for new orders
      socket.on('order:new', (newOrder) => {
        setOrders((prev) => [newOrder, ...prev]);
        // Re-trigger analytics load to keep sums accurate
        const serverUrl = getServerUrl();
        fetch(`${serverUrl}/api/admin/analytics`, {
          headers: { Authorization: `Bearer ${adminToken}` },
          cache: 'no-store',
        })
          .then((res) => res.json())
          .then((data) => setAnalytics(data))
          .catch(console.error);
      });

      socket.on('order:updated', (updatedOrder) => {
        setOrders((prev) => prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o)));
      });

      socket.on('staff:attendance:updated', () => {
        fetchStaffAttendance();
      });

      return () => {
        socket.off('order:new');
        socket.off('order:updated');
        socket.off('staff:attendance:updated');
      };
    }
  }, [adminToken]);

  useEffect(() => {
    if (adminToken) fetchAllData(activeTab);
  }, [adminToken, activeTab]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setLoginLoading(true);
    setLoginError('');

    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Incorrect credentials. Please try again.');
      }

      setAdminAuth(data.token, data.user);
    } catch (err: any) {
      setLoginError(err.message || 'Login failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Status transitions
  const handleUpdateOrderStatus = async (orderId: string, nextStatus: string) => {
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) throw new Error();
      await fetchAllData();
    } catch (err) {
      alert('Error updating order.');
    }
  };

  const handleDenyRefund = async (orderId: string) => {
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/orders/${orderId}/refund`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${adminToken}` },
      });

      if (!res.ok) throw new Error();
      await fetchAllData();
    } catch {
      alert('Failed to deny refund.');
    }
  };

  // Category Save / Delete
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl = getServerUrl();
      const payload = {
        name: catName,
        icon: catIcon,
        sortOrder: parseInt(catSortOrder.toString()),
      };

      const url = selectedCat
        ? `${serverUrl}/api/admin/categories/${selectedCat.id}`
        : `${serverUrl}/api/admin/categories`;
      const method = selectedCat ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      
      setShowCatModal(false);
      setSelectedCat(null);
      await fetchAllData();
    } catch (err) {
      alert('Failed to save category.');
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category? All its items will be deleted too!')) return;
    try {
      const serverUrl = getServerUrl();
      await fetch(`${serverUrl}/api/admin/categories/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      await fetchAllData();
    } catch (err) {
      alert('Failed to delete.');
    }
  };

  // Menu Item Save / Delete
  const handleSaveMenuItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl = getServerUrl();
      const addOnsParsed = itemAddOns
        .map((addOn) => ({
          name: addOn.name.trim(),
          price: Number(addOn.price || 0),
        }))
        .filter((addOn) => addOn.name.length > 0);

      if (addOnsParsed.some((addOn) => !Number.isFinite(addOn.price) || addOn.price < 0)) {
        alert('Add-on prices must be zero or higher.');
        return;
      }

      const payload = {
        name: itemName,
        description: itemDesc,
        price: parseFloat(itemPrice.toString()),
        isVeg: itemVeg,
        isAvailable: itemAvail,
        categoryId: itemCatId,
        targetQueue: itemQueue,
        addOns: addOnsParsed.length > 0 ? addOnsParsed : null,
        imageUrl: itemImage.trim() || undefined,
        trackStock: itemTrackStock,
        stockQuantity: itemTrackStock ? itemStockQty : null,
        lowStockAt: itemLowStockAt,
      };

      const url = selectedItem
        ? `${serverUrl}/api/admin/menu-items/${selectedItem.id}`
        : `${serverUrl}/api/admin/menu-items`;
      const method = selectedItem ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setShowItemModal(false);
      setSelectedItem(null);
      await fetchAllData();
    } catch (err) {
      alert('Failed to save menu item.');
    }
  };

  const handleDeleteMenuItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this menu item?')) return;
    try {
      const serverUrl = getServerUrl();
      await fetch(`${serverUrl}/api/admin/menu-items/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      await fetchAllData();
    } catch (err) {
      alert('Failed to delete.');
    }
  };

  const normalizeAddOnRows = (addOns: any): AddOnRow[] =>
    Array.isArray(addOns)
      ? addOns
          .map((addOn) => ({
            name: String(addOn?.name || ''),
            price: addOn?.price === undefined || addOn?.price === null ? '' : String(addOn.price),
          }))
          .filter((addOn) => addOn.name || addOn.price)
      : [];

  const addAddOnRow = () => {
    setItemAddOns((rows) => [...rows, { name: '', price: '' }]);
  };

  const updateAddOnRow = (index: number, field: keyof AddOnRow, value: string) => {
    setItemAddOns((rows) => rows.map((row, rowIndex) => (rowIndex === index ? { ...row, [field]: value } : row)));
  };

  const removeAddOnRow = (index: number) => {
    setItemAddOns((rows) => rows.filter((_, rowIndex) => rowIndex !== index));
  };

  // Base64 simulated image uploader helper
  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Password change failed.');
      setCurrentPassword('');
      setNewPassword('');
      setOperationMessage('Password changed successfully.');
    } catch (err: any) {
      alert(err.message || 'Failed to change password.');
    }
  };

  const handleCreateStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ username: staffUsername, password: staffPassword, name: staffName, role: staffRole }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Staff creation failed.');
      setStaffUsername('');
      setStaffPassword('');
      setStaffName('');
      setStaffRole('STAFF');
      await fetchAllData();
      setOperationMessage('Staff account created.');
    } catch (err: any) {
      alert(err.message || 'Failed to create staff account.');
    }
  };

  const handleDeleteStaff = async (id: string) => {
    if (!confirm('Delete this staff account?')) return;
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed.');
      await fetchAllData();
      setOperationMessage('Staff account deleted.');
    } catch (err: any) {
      alert(err.message || 'Failed to delete staff account.');
    }
  };

  const isStaffCheckedIn = (userId: string) =>
    Boolean(staffAttendance?.activeShifts?.some((shift: any) => shift.userId === userId));

  const getShiftDuration = (shift: any) => {
    const start = new Date(shift.checkInAt).getTime();
    const end = shift.checkOutAt ? new Date(shift.checkOutAt).getTime() : Date.now();
    const minutes = Math.max(0, Math.floor((end - start) / 60000));
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const handleStaffAttendance = async (userId: string, action: 'check-in' | 'check-out') => {
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/staff/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Attendance update failed.');
      await fetchAllData();
      setOperationMessage(action === 'check-in' ? 'Staff checked in.' : 'Staff checked out.');
    } catch (err: any) {
      alert(err.message || 'Failed to update attendance.');
    }
  };

  const handleDownloadAttendanceCsv = async () => {
    try {
      const serverUrl = getServerUrl();
      const params = new URLSearchParams({ from: attendanceFrom, to: attendanceTo });
      const res = await fetch(`${serverUrl}/api/admin/staff/attendance.csv?${params.toString()}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        cache: 'no-store',
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Attendance CSV download failed.');
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `staff-attendance-${attendanceFrom}-to-${attendanceTo}.csv`;
      link.click();
      URL.revokeObjectURL(url);
      setOperationMessage('Attendance CSV downloaded.');
    } catch (err: any) {
      alert(err.message || 'Failed to download attendance CSV.');
    }
  };

  const handleDownloadBackup = async () => {
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/backup`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        cache: 'no-store',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Backup failed.');
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `niva-pos-backup-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
      setOperationMessage('Backup downloaded.');
    } catch (err: any) {
      alert(err.message || 'Failed to download backup.');
    }
  };

  const handleSaveLocalBackup = async () => {
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/backup/save-local`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Local backup failed.');
      setOperationMessage(`Local backup saved: ${data.path}`);
    } catch (err: any) {
      alert(err.message || 'Failed to save local backup.');
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify(cafeSettings || {}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Settings update failed.');
      setCafeSettings(data);
      await fetchAllData();
      setOperationMessage('Cafe setup saved.');
    } catch (err: any) {
      alert(err.message || 'Failed to save cafe setup.');
    }
  };

  const handleInventoryTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/inventory/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({
          menuItemId: inventoryItemId,
          type: inventoryType,
          quantity: inventoryQty,
          note: inventoryNote,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Inventory update failed.');
      setInventoryNote('');
      await fetchAllData();
      setOperationMessage('Inventory transaction saved.');
    } catch (err: any) {
      alert(err.message || 'Failed to update inventory.');
    }
  };

  const handleRestoreBackup = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!confirm('Restore menu catalog from this backup? Orders and customers will not be overwritten.')) return;
    try {
      const backup = JSON.parse(await file.text());
      const serverUrl = getServerUrl();
      const res = await fetch(`${serverUrl}/api/admin/restore`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify(backup),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Restore failed.');
      await fetchAllData();
      setOperationMessage(data.message || 'Catalog restored.');
    } catch (err: any) {
      alert(err.message || 'Failed to restore backup.');
    } finally {
      e.target.value = '';
    }
  };

  // --- 1. Login Panel Overlays ---
  if (!adminToken) {
    return (
      <div className="min-h-screen bg-beige-100 flex items-center justify-center p-4">
        <div
          className="w-full max-w-md bg-white rounded-3xl border border-beige-300/40 shadow-2xl p-8 flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-espresso-950 rounded-full flex items-center justify-center text-beige-100 mb-4 shadow">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-serif-elegant font-bold text-espresso-950">Niva POS Admin</h2>
          <p className="text-xs text-espresso-600 font-sans mt-1 mb-6">
            Enter administrative credentials to access POS panels
          </p>

          <form onSubmit={handleLogin} className="w-full space-y-4">
            <div className="text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest text-espresso-400 block mb-1">
                Username
              </label>
              <input
                type="text"
                required
                placeholder="E.g. admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-beige-50/50 border border-beige-300/40 rounded-xl text-espresso-900 placeholder-espresso-400 text-sm focus:outline-none focus:border-espresso-900 smooth-transition"
              />
            </div>

            <div className="text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest text-espresso-400 block mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="E.g. admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-beige-50/50 border border-beige-300/40 rounded-xl text-espresso-900 placeholder-espresso-400 text-sm focus:outline-none focus:border-espresso-900 smooth-transition"
              />
            </div>

            {loginError && (
              <p className="text-xs font-semibold text-terracotta-500 text-left">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-espresso-950 hover:bg-espresso-900 text-beige-100 py-3.5 rounded-xl font-bold tracking-wider uppercase smooth-transition cursor-pointer text-xs"
            >
              {loginLoading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredOrders =
    orderStatusFilter === 'ALL'
      ? orders
      : orders.filter((order) => order.status === orderStatusFilter);

  const activeOrders = orders.filter((order) => order.status !== 'SERVED' && order.status !== 'CANCELLED');
  const kitchenOrders = activeOrders.filter((order) =>
    order.items?.some((item: any) => item.targetQueue === 'KITCHEN')
  );
  const barOrders = activeOrders.filter((order) =>
    order.items?.some((item: any) => item.targetQueue === 'BAR')
  );
  const billOrders = orders.filter((order) => order.status !== 'CANCELLED');

  const getPanelUrl = (path: string, withAccess = true) => {
    const origin = typeof window === 'undefined' ? 'http://localhost:3000' : window.location.origin;
    const access = withAccess && adminToken ? `access=${encodeURIComponent(adminToken)}` : '';
    const separator = path.includes('?') ? '&' : '?';
    return `${origin}${path}${access ? `${separator}${access}` : ''}`;
  };

  const managerPanels = [
    {
      title: 'Kitchen Display',
      label: 'KDS',
      href: getPanelUrl('/kds'),
      icon: UtensilsCrossed,
      count: `${kitchenOrders.length} active`,
    },
    {
      title: 'Bar Queue',
      label: 'BDS',
      href: getPanelUrl('/bar'),
      icon: GlassWater,
      count: `${barOrders.length} active`,
    },
    {
      title: 'Billing Counter',
      label: 'Bills',
      href: getPanelUrl('/billing'),
      icon: ReceiptText,
      count: `${billOrders.length} bills`,
    },
    {
      title: 'QR Tables',
      label: 'QR',
      href: getPanelUrl('/qr', false),
      icon: QrCode,
      count: 'print tools',
    },
    {
      title: 'Customer Menu',
      label: 'Table 1',
      href: getPanelUrl('/?table=1', false),
      icon: ShoppingBag,
      count: 'guest view',
    },
  ];

  return (
    <div className="min-h-screen bg-beige-100 flex flex-col font-sans">
      {/* Admin header */}
      <header className="bg-espresso-950 text-beige-100 px-6 py-4 flex items-center justify-between border-b border-white/5 shadow-md">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-gold-500" />
          <h1 className="text-lg font-serif-elegant font-bold tracking-wide">NIVA POS MANAGER</h1>
          <span className="text-[9px] uppercase font-bold tracking-widest bg-beige-100/10 text-beige-300 px-2.5 py-0.5 rounded border border-white/5">
            Admin console
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-espresso-400">
            Welcome, <strong>{adminUser?.name}</strong>
          </span>
          <button
            onClick={logoutAdmin}
            className="p-2 bg-white/5 hover:bg-terracotta-500/20 hover:text-terracotta-500 rounded-full border border-white/5 smooth-transition cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Tabbed Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Sidebar navigation */}
        <aside className="md:col-span-1 space-y-2">
          <button
            onClick={() => setActiveTab('hub')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'hub' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <Monitor className="w-4 h-4" />
            Manager Hub
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'analytics' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Analytics Dashboard
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'orders' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Live Orders Queue
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'categories' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <Grid className="w-4 h-4" />
            Category Editor
          </button>

          <button
            onClick={() => setActiveTab('items')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'items' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <List className="w-4 h-4" />
            Menu Item CRUD
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'customers' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <Users className="w-4 h-4" />
            All Customers
          </button>

          <button
            onClick={() => setActiveTab('operations')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'operations' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            Operations
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 smooth-transition ${
              activeTab === 'staff' ? 'bg-espresso-950 text-beige-100' : 'bg-white text-espresso-600 hover:bg-beige-200/50'
            }`}
          >
            <Lock className="w-4 h-4" />
            Staff & Security
          </button>
        </aside>

        {/* Right Dashboard Area */}
        <main className="md:col-span-4 space-y-6">
          {/* TAB 0: MANAGER HUB */}
          {activeTab === 'hub' && analytics && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-gold-600">Manager command center</span>
                    <h2 className="text-2xl font-serif-elegant font-bold text-espresso-950">Monitor the Shop From One Screen</h2>
                    <p className="text-xs text-espresso-600 font-sans mt-1">
                      Open live systems below or watch Kitchen, Bar, and Billing inside this panel.
                    </p>
                    <p className="text-[10px] text-espresso-400 font-bold uppercase tracking-wider mt-2">
                      {loading
                        ? 'Syncing...'
                        : lastSyncedAt
                        ? `Last synced ${lastSyncedAt.toLocaleTimeString()}`
                        : 'Waiting for first sync'}
                    </p>
                  </div>
                  <button
                    onClick={() => fetchAllData()}
                    disabled={loading}
                    className="px-4 py-2 rounded-full bg-espresso-950 disabled:bg-espresso-950/60 text-beige-100 text-xs font-bold hover:bg-espresso-900 smooth-transition"
                  >
                    {loading ? 'Refreshing...' : 'Refresh Hub'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
                  {managerPanels.map((panel) => {
                    const Icon = panel.icon;
                    return (
                      <a
                        key={panel.title}
                        href={panel.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group p-4 rounded-2xl border border-beige-300/30 bg-beige-50 hover:bg-beige-100 smooth-transition flex items-center gap-3"
                      >
                        <span className="p-2.5 rounded-full bg-white text-espresso-900 shadow-sm group-hover:bg-espresso-950 group-hover:text-beige-100 smooth-transition">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="text-sm font-extrabold text-espresso-950 block">{panel.title}</span>
                          <span className="text-[10px] uppercase tracking-wider font-bold text-espresso-500">{panel.count}</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-espresso-400 group-hover:text-espresso-900" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-beige-200 flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-widest text-espresso-500">Kitchen Live View</h3>
                    <a href={getPanelUrl('/kds')} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-terracotta-600 hover:underline">Open full</a>
                  </div>
                  <div className="p-4 space-y-3 max-h-[430px] overflow-y-auto">
                    {kitchenOrders.length === 0 ? (
                      <p className="text-xs text-espresso-500">Kitchen queue is clear.</p>
                    ) : (
                      kitchenOrders.slice(0, 8).map((order) => (
                        <div key={order.id} className="rounded-2xl border border-beige-300/40 bg-beige-50 p-3 flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-black text-espresso-950">{order.orderNumber}</span>
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-terracotta-500/10 text-terracotta-600">
                                Table {order.tableNumber}
                              </span>
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-beige-200 text-espresso-600">
                                {order.status}
                              </span>
                            </div>
                            <p className="text-xs text-espresso-600 mt-1 line-clamp-2">
                              {order.items
                                ?.filter((item: any) => item.targetQueue === 'KITCHEN')
                                .map((item: any) => `${item.quantity}x ${item.menuItem?.name}`)
                                .join(', ')}
                            </p>
                          </div>
                          <button
                            onClick={() => handleUpdateOrderStatus(order.id, order.status === 'PENDING' ? 'PREPARING' : 'READY')}
                            disabled={!['PENDING', 'PREPARING'].includes(order.status)}
                            className="shrink-0 px-3 py-2 rounded-full bg-espresso-950 disabled:bg-beige-200 disabled:text-espresso-400 text-beige-100 text-[10px] font-bold"
                          >
                            {order.status === 'PENDING' ? 'Start' : order.status === 'PREPARING' ? 'Ready' : 'Live'}
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-beige-200 flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-widest text-espresso-500">Bar Live View</h3>
                    <a href={getPanelUrl('/bar')} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-gold-650 hover:underline">Open full</a>
                  </div>
                  <div className="p-4 space-y-3 max-h-[430px] overflow-y-auto">
                    {barOrders.length === 0 ? (
                      <p className="text-xs text-espresso-500">Bar queue is clear.</p>
                    ) : (
                      barOrders.slice(0, 8).map((order) => (
                        <div key={order.id} className="rounded-2xl border border-beige-300/40 bg-beige-50 p-3 flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-black text-espresso-950">{order.orderNumber}</span>
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-650">
                                Table {order.tableNumber}
                              </span>
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-beige-200 text-espresso-600">
                                {order.status}
                              </span>
                            </div>
                            <p className="text-xs text-espresso-600 mt-1 line-clamp-2">
                              {order.items
                                ?.filter((item: any) => item.targetQueue === 'BAR')
                                .map((item: any) => `${item.quantity}x ${item.menuItem?.name}`)
                                .join(', ')}
                            </p>
                          </div>
                          <a href={getPanelUrl('/bar')} target="_blank" rel="noreferrer" className="shrink-0 px-3 py-2 rounded-full bg-gold-500 text-espresso-950 text-[10px] font-bold">
                            Open
                          </a>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-beige-200 flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-widest text-espresso-500">Billing Counter Live View</h3>
                  <div className="flex items-center gap-3">
                    <button onClick={() => fetchAllData()} disabled={loading} className="text-[10px] font-bold text-espresso-800 hover:underline disabled:opacity-50">
                      {loading ? 'Syncing...' : 'Sync bills'}
                    </button>
                    <a href={getPanelUrl('/billing')} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-espresso-800 hover:underline">Open full</a>
                  </div>
                </div>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-3 max-h-[430px] overflow-y-auto">
                  {billOrders.length === 0 ? (
                    <p className="text-xs text-espresso-500">No active bills.</p>
                  ) : (
                    billOrders.slice(0, 10).map((order) => (
                      <div key={order.id} className="rounded-2xl border border-beige-300/40 bg-beige-50 p-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-sm font-black text-espresso-950">{order.orderNumber}</span>
                          <span className="text-sm font-black text-espresso-950">{formatCurrency(order.finalPrice)}</span>
                        </div>
                        <p className="text-xs text-espresso-600 mt-1">
                          Table {order.tableNumber} - {order.customer?.name || 'Guest'} - {order.status}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: ANALYTICS */}
          {activeTab === 'analytics' && analytics && (
            <div className="space-y-6">
              {/* Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm flex items-center gap-4">
                  <div className="p-3.5 bg-gold-500/10 text-gold-650 rounded-full">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-espresso-400 uppercase block">Daily Revenue</span>
                    <span className="text-xl font-black text-espresso-900">{formatCurrency(analytics.revenue?.totalRevenue || 0)}</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm flex items-center gap-4">
                  <div className="p-3.5 bg-sage-500/10 text-sage-600 rounded-full">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-espresso-400 uppercase block">Total Orders</span>
                    <span className="text-xl font-black text-espresso-900">{analytics.revenue?.totalOrders}</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm flex items-center gap-4">
                  <div className="p-3.5 bg-terracotta-500/10 text-terracotta-600 rounded-full">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-espresso-400 uppercase block">Avg Order Value</span>
                    <span className="text-xl font-black text-espresso-900">{formatCurrency(analytics.revenue?.averageOrderValue || 0)}</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm flex items-center gap-4">
                  <div className="p-3.5 bg-espresso-950/10 text-espresso-900 rounded-full">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-espresso-400 uppercase block">Active Tables</span>
                    <span className="text-xl font-black text-espresso-900">{analytics.tableOccupancy} / 20</span>
                  </div>
                </div>
              </div>

              {/* Best sellers & Peak hours graphs list representation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Best Sellers */}
                <div className="bg-white p-6 rounded-3xl border border-beige-300/30 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400 mb-4">
                    Best-Selling Items (Quantity)
                  </h3>
                  <div className="space-y-4">
                    {analytics.bestSellers?.length > 0 ? (
                      analytics.bestSellers.map((item: any) => (
                        <div key={item.name} className="space-y-1">
                          <div className="flex justify-between text-xs font-bold text-espresso-900">
                            <span>{item.name}</span>
                            <span>{item.quantity} orders</span>
                          </div>
                          <div className="w-full bg-beige-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-espresso-900 h-2 rounded-full"
                              style={{ width: `${Math.min((item.quantity / 20) * 100, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs font-sans text-espresso-400 italic">No sales recorded today.</p>
                    )}
                  </div>
                </div>

                {/* Peak Hours count list */}
                <div className="bg-white p-6 rounded-3xl border border-beige-300/30 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400 mb-4">
                    Peak Hours Analytics (Hourly Order Density)
                  </h3>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {analytics.peakHours?.map((ph: any) => (
                      <div key={ph.hour} className="flex justify-between items-center text-xs text-espresso-800 border-b border-beige-100 py-1.5">
                        <span className="font-bold">
                          {ph.hour === 0 ? '12 AM' : ph.hour === 12 ? '12 PM' : ph.hour > 12 ? `${ph.hour - 12} PM` : `${ph.hour} AM`}
                        </span>
                        <span className="bg-beige-100 text-espresso-850 px-2 py-0.5 rounded-full font-extrabold text-[10px]">
                          {ph.count} orders
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-beige-300/30 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400 mb-4">
                  Recommendation Analytics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {analytics.recommendationAnalytics?.length > 0 ? (
                    analytics.recommendationAnalytics.map((row: any) => (
                      <span key={row.source} className="px-3 py-2 rounded-full bg-beige-100 text-espresso-700 text-xs font-black">
                        {row.source}: {row.count}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-espresso-400 italic">No recommendation impressions recorded yet.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE ORDERS MANAGEMENT */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400 mb-2">
                Central Live Order Manager
              </h3>
              <div className="flex flex-wrap gap-2">
                {(['ALL', 'PENDING', 'PREPARING', 'READY', 'SERVED', 'CANCELLED'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      orderStatusFilter === status
                        ? 'bg-espresso-950 text-beige-100'
                        : 'bg-beige-100 text-espresso-600 hover:bg-beige-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-beige-300/40 text-[10px] font-bold uppercase text-espresso-400 tracking-wider">
                      <th className="pb-3">Order</th>
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">Table</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beige-100">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-beige-100/30">
                        <td className="py-4 font-mono font-bold text-espresso-900">{order.orderNumber}</td>
                        <td className="py-4">
                          <span className="font-bold block">{order.customer?.name}</span>
                          <span className="text-[10px] text-espresso-500">{order.customer?.mobile}</span>
                        </td>
                        <td className="py-4 font-bold">{order.tableNumber}</td>
                        <td className="py-4 font-extrabold text-espresso-900">{formatCurrency(order.finalPrice)}</td>
                        <td className="py-4">
                          <span
                            className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                              order.status === 'SERVED'
                                ? 'bg-sage-500/10 text-sage-600'
                                : order.status === 'READY'
                                ? 'bg-gold-500/10 text-gold-600'
                                : order.status === 'PREPARING'
                                ? 'bg-amber-500/10 text-amber-600'
                                : order.status === 'CANCELLED'
                                ? 'bg-terracotta-500/10 text-terracotta-600'
                                : 'bg-beige-200 text-espresso-400'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-right space-x-1.5">
                          {order.status === 'PENDING' && (
                            <button
                              onClick={() => handleUpdateOrderStatus(order.id, 'PREPARING')}
                              className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 font-bold rounded-lg cursor-pointer smooth-transition"
                            >
                              Accept
                            </button>
                          )}
                          {order.status === 'PREPARING' && (
                            <button
                              onClick={() => handleUpdateOrderStatus(order.id, 'READY')}
                              className="px-2.5 py-1 bg-sage-500/10 hover:bg-sage-500/20 text-sage-650 font-bold rounded-lg cursor-pointer smooth-transition"
                            >
                              Ready
                            </button>
                          )}
                          {order.status === 'READY' && (
                            <button
                              onClick={() => handleUpdateOrderStatus(order.id, 'SERVED')}
                              className="px-2.5 py-1 bg-espresso-950 text-beige-100 font-bold rounded-lg cursor-pointer smooth-transition"
                            >
                              Serve
                            </button>
                          )}
                          {order.status !== 'SERVED' && order.status !== 'CANCELLED' && (
                            <button
                              onClick={() => handleUpdateOrderStatus(order.id, 'CANCELLED')}
                              className="px-2.5 py-1 bg-terracotta-500/10 hover:bg-terracotta-500/20 text-terracotta-600 font-bold rounded-lg cursor-pointer smooth-transition"
                            >
                              Cancel
                            </button>
                          )}
                          <button
                            onClick={() => handleDenyRefund(order.id)}
                            className="px-2.5 py-1 bg-beige-100 hover:bg-beige-200 text-espresso-600 font-bold rounded-lg cursor-pointer smooth-transition"
                          >
                            Deny Refund
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: CATEGORIES CRUD */}
          {activeTab === 'categories' && (
            <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">
                  Menu Categories
                </h3>
                <button
                  onClick={() => {
                    setSelectedCat(null);
                    setCatName('');
                    setCatIcon('Sparkles');
                    setCatSortOrder(categories.length + 1);
                    setShowCatModal(true);
                  }}
                  className="px-3.5 py-2 bg-espresso-950 hover:bg-espresso-900 text-beige-100 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer smooth-transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Category
                </button>
              </div>

              {/* Categories list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <div key={cat.id} className="p-4 bg-beige-100/40 rounded-2xl border border-beige-300/20 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="p-2 bg-white rounded-xl shadow-sm text-espresso-850">
                        <CategoryIcon name={cat.icon} className="w-4 h-4" />
                      </span>
                      <div>
                        <span className="font-bold text-sm text-espresso-950 block">{cat.name}</span>
                        <span className="text-[10px] text-espresso-500">Order: {cat.sortOrder} • {cat.isActive ? 'Active' : 'Hidden'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          setSelectedCat(cat);
                          setCatName(cat.name);
                          setCatIcon(cat.icon);
                          setCatSortOrder(cat.sortOrder);
                          setShowCatModal(true);
                        }}
                        className="p-2 text-espresso-500 hover:text-espresso-900 hover:bg-white rounded-full smooth-transition cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(cat.id)}
                        className="p-2 text-espresso-400 hover:text-terracotta-500 hover:bg-white rounded-full smooth-transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MENU ITEMS CRUD */}
          {activeTab === 'items' && (
            <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">
                  Manage Dishes & Drinks
                </h3>
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setItemName('');
                    setItemDesc('');
                    setItemPrice(0);
                    setItemVeg(true);
                    setItemAvail(true);
                    setItemCatId(categories[0]?.id || '');
                    setItemQueue('KITCHEN');
                    setItemAddOns([]);
                    setItemImage('');
                    setItemTrackStock(false);
                    setItemStockQty('');
                    setItemLowStockAt(5);
                    setShowItemModal(true);
                  }}
                  className="px-3.5 py-2 bg-espresso-950 hover:bg-espresso-900 text-beige-100 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer smooth-transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Menu Item
                </button>
              </div>

              {/* Items Table List */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-beige-300/40 text-[10px] font-bold uppercase text-espresso-400 tracking-wider">
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Price</th>
                      <th className="pb-3">Queue</th>
                      <th className="pb-3">Stock</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beige-100">
                    {menuItems.map((item) => (
                      <tr key={item.id} className="hover:bg-beige-100/30">
                        <td className="py-3 font-bold text-espresso-900">
                          <span className="flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-sage-500' : 'bg-terracotta-500'}`} />
                            {item.name}
                          </span>
                        </td>
                        <td className="py-3 font-medium">{item.category?.name}</td>
                        <td className="py-3 font-bold text-espresso-900">{formatCurrency(item.price)}</td>
                        <td className="py-3 font-bold text-espresso-400">{item.targetQueue}</td>
                        <td className="py-3 font-bold text-espresso-600">
                          {item.trackStock ? `${item.stockQuantity ?? 0} left` : 'Not tracked'}
                        </td>
                        <td className="py-3">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${item.isAvailable ? 'bg-sage-500/10 text-sage-600' : 'bg-terracotta-500/10 text-terracotta-600'}`}>
                            {item.isAvailable ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="py-3 text-right space-x-1">
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setItemName(item.name);
                              setItemDesc(item.description || '');
                              setItemPrice(item.price);
                              setItemVeg(item.isVeg);
                              setItemAvail(item.isAvailable);
                              setItemCatId(item.categoryId);
                              setItemQueue(item.targetQueue);
                              setItemAddOns(normalizeAddOnRows(item.addOns));
                              setItemImage(item.imageUrl || '');
                              setItemTrackStock(item.trackStock || false);
                              setItemStockQty(item.stockQuantity ?? '');
                              setItemLowStockAt(item.lowStockAt ?? 5);
                              setShowItemModal(true);
                            }}
                            className="p-1.5 text-espresso-500 hover:text-espresso-900 hover:bg-beige-100 rounded-lg smooth-transition cursor-pointer inline-block"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteMenuItem(item.id)}
                            className="p-1.5 text-espresso-400 hover:text-terracotta-500 hover:bg-beige-100 rounded-lg smooth-transition cursor-pointer inline-block"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: ALL CUSTOMERS & RECOMMENDATION ANALYTICS */}
          {activeTab === 'customers' && analytics && (
            <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">
                  All Customer Directory
                </h3>
                <p className="text-xs text-espresso-500 mt-1">
                  Every guest profile saved locally, including first-time and repeat customers.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-beige-300/40 text-[10px] font-bold uppercase text-espresso-400 tracking-wider">
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Contact</th>
                      <th className="pb-3">First Seen</th>
                      <th className="pb-3">Last Visit</th>
                      <th className="pb-3">Orders placed</th>
                      <th className="pb-3 text-right">LTV Spends</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beige-100">
                    {analytics.customers?.map((cust: any) => (
                      <tr key={cust.id} className="hover:bg-beige-100/30">
                        <td className="py-3.5 font-bold text-espresso-950">{cust.name}</td>
                        <td className="py-3.5 font-semibold text-espresso-600">{cust.mobile}</td>
                        <td className="py-3.5 font-semibold text-espresso-600">
                          {cust.createdAt ? new Date(cust.createdAt).toLocaleDateString() : '-'}
                        </td>
                        <td className="py-3.5 font-semibold text-espresso-600">
                          {cust.lastVisit ? new Date(cust.lastVisit).toLocaleString() : 'No orders yet'}
                        </td>
                        <td className="py-3.5 font-mono font-bold text-center">{cust.orderCount}</td>
                        <td className="py-3.5 font-black text-espresso-950 text-right">{formatCurrency(cust.totalSpent)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'operations' && (
            <div className="space-y-6">
              {operationMessage && (
                <div className="bg-sage-500/10 text-sage-650 border border-sage-500/20 rounded-2xl px-4 py-3 text-xs font-bold">
                  {operationMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm">
                  <span className="text-[10px] font-bold text-espresso-400 uppercase block">Close Revenue</span>
                  <span className="text-xl font-black text-espresso-900">{formatCurrency(dailyClose?.totals?.netRevenue || 0)}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm">
                  <span className="text-[10px] font-bold text-espresso-400 uppercase block">Paid Orders</span>
                  <span className="text-xl font-black text-espresso-900">{dailyClose?.totals?.paidOrders || 0}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm">
                  <span className="text-[10px] font-bold text-espresso-400 uppercase block">Unpaid Bills</span>
                  <span className="text-xl font-black text-espresso-900">{dailyClose?.totals?.unpaidOrders || 0}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm">
                  <span className="text-[10px] font-bold text-espresso-400 uppercase block">Tables Used</span>
                  <span className="text-xl font-black text-espresso-900">{dailyClose?.tableCount || 0}</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-gold-600">System readiness</span>
                    <h3 className="text-lg font-serif-elegant font-bold text-espresso-950 mt-1">{systemStatus?.cafeLegalName || 'Local POS'}</h3>
                    <p className="text-xs text-espresso-500 mt-1">
                      One SMS and one payment gateway account are configured per cafe deployment. Customers only enter their phone number and pay normally.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-2 rounded-full text-[10px] font-black uppercase ${systemStatus?.sms?.customerOtpEnabled ? (systemStatus?.sms?.configured ? 'bg-sage-500/10 text-sage-650' : 'bg-terracotta-500/10 text-terracotta-600') : 'bg-beige-100 text-espresso-700'}`}>
                      OTP: {systemStatus?.sms?.customerOtpEnabled ? (systemStatus?.sms?.configured ? `${systemStatus.sms.provider} ready` : 'SMS not configured') : 'Disabled'}
                    </span>
                    <span className="px-3 py-2 rounded-full text-[10px] font-black uppercase bg-beige-100 text-espresso-700">
                      LAN ready
                    </span>
                    <span className={`px-3 py-2 rounded-full text-[10px] font-black uppercase ${systemStatus?.payments?.phonePeConfigured ? 'bg-sage-500/10 text-sage-650' : 'bg-beige-100 text-espresso-700'}`}>
                      PhonePe: {systemStatus?.payments?.phonePeConfigured ? `${systemStatus.payments.phonePeEnvironment} ready` : 'Manual fallback'}
                    </span>
                    <span className="px-3 py-2 rounded-full text-[10px] font-black uppercase bg-beige-100 text-espresso-700">
                      PWA ready
                    </span>
                  </div>
                </div>
              </div>

              {cafeSettings && (
                <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Cafe Setup</h3>
                    <p className="text-xs text-espresso-500 mt-1">These values print on bills, QR flows, and manager status screens.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <input value={cafeSettings.cafeName || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, cafeName: e.target.value })} placeholder="Cafe name" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={cafeSettings.cafeLegalName || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, cafeLegalName: e.target.value })} placeholder="Legal / bill name" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={cafeSettings.upiId || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, upiId: e.target.value })} placeholder="UPI ID" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={cafeSettings.gstLabel || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, gstLabel: e.target.value })} placeholder="GST label" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input type="number" step="0.01" value={cafeSettings.gstRate ?? 0.05} onChange={(e) => setCafeSettings({ ...cafeSettings, gstRate: Number(e.target.value) })} placeholder="GST rate" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input type="number" value={cafeSettings.tableCount || 20} onChange={(e) => setCafeSettings({ ...cafeSettings, tableCount: Number(e.target.value) })} placeholder="Table count" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={cafeSettings.phone || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, phone: e.target.value })} placeholder="Cafe phone" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={cafeSettings.printerName || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, printerName: e.target.value })} placeholder="Printer name / counter" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={cafeSettings.backupFolder || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, backupFolder: e.target.value })} placeholder="Local backup folder" className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                  </div>
                  <textarea value={cafeSettings.address || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, address: e.target.value })} placeholder="Address" className="w-full h-16 p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900 text-xs resize-none" />
                  <textarea value={cafeSettings.billFooter || ''} onChange={(e) => setCafeSettings({ ...cafeSettings, billFooter: e.target.value })} placeholder="Bill footer" className="w-full h-14 p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900 text-xs resize-none" />
                  <button type="submit" className="px-4 py-2 rounded-full bg-espresso-950 text-beige-100 text-xs font-bold">Save Cafe Setup</button>
                </form>
              )}

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Daily Close Report</h3>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-2xl bg-beige-50 p-3">
                      <span className="text-espresso-400 font-bold uppercase text-[10px]">Gross sales</span>
                      <p className="font-black text-espresso-950">{formatCurrency(dailyClose?.totals?.grossSales || 0)}</p>
                    </div>
                    <div className="rounded-2xl bg-beige-50 p-3">
                      <span className="text-espresso-400 font-bold uppercase text-[10px]">GST / tax</span>
                      <p className="font-black text-espresso-950">{formatCurrency(dailyClose?.totals?.tax || 0)}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(dailyClose?.revenueByMethod || {}).map(([method, value]) => (
                      <div key={method} className="flex items-center justify-between text-xs border-b border-beige-100 py-2">
                        <span className="font-bold text-espresso-700">{method}</span>
                        <span className="font-black text-espresso-950">{formatCurrency(Number(value))}</span>
                      </div>
                    ))}
                    {Object.keys(dailyClose?.revenueByMethod || {}).length === 0 && (
                      <p className="text-xs text-espresso-400">No paid collections recorded today.</p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Inventory Watch</h3>
                  <form onSubmit={handleInventoryTransaction} className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                    <select value={inventoryItemId} onChange={(e) => setInventoryItemId(e.target.value)} className="sm:col-span-2 p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900">
                      <option value="">Select stock item</option>
                      {menuItems.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </select>
                    <select value={inventoryType} onChange={(e) => setInventoryType(e.target.value)} className="p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900">
                      <option value="PURCHASE">Purchase</option>
                      <option value="WASTAGE">Wastage</option>
                      <option value="ADJUSTMENT">Adjustment</option>
                    </select>
                    <input type="number" min="1" value={inventoryQty} onChange={(e) => setInventoryQty(parseInt(e.target.value || '1'))} className="p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input value={inventoryNote} onChange={(e) => setInventoryNote(e.target.value)} placeholder="Note / supplier" className="sm:col-span-3 p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <button type="submit" className="px-4 py-2 rounded-full bg-espresso-950 text-beige-100 font-bold">Save Stock</button>
                  </form>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {menuItems
                      .filter((item) => item.trackStock)
                      .sort((a, b) => (a.stockQuantity ?? 0) - (b.stockQuantity ?? 0))
                      .map((item) => (
                        <div key={item.id} className="flex items-center justify-between rounded-2xl bg-beige-50 p-3 text-xs">
                          <div>
                            <p className="font-black text-espresso-950">{item.name}</p>
                            <p className="text-[10px] font-bold text-espresso-500">{item.category?.name}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full font-black ${Number(item.stockQuantity || 0) <= Number(item.lowStockAt || 0) ? 'bg-terracotta-500/10 text-terracotta-600' : 'bg-sage-500/10 text-sage-650'}`}>
                            {item.stockQuantity ?? 0} left
                          </span>
                        </div>
                      ))}
                    {menuItems.filter((item) => item.trackStock).length === 0 && (
                      <p className="text-xs text-espresso-400">Enable stock tracking on menu items to monitor inventory.</p>
                    )}
                  </div>
                  <div className="border-t border-beige-200 pt-3 space-y-2 max-h-48 overflow-y-auto">
                    {inventoryTransactions.slice(0, 8).map((row) => (
                      <div key={row.id} className="flex items-center justify-between text-[10px] bg-beige-50 rounded-xl p-2">
                        <span className="font-bold text-espresso-800">{row.menuItem?.name}</span>
                        <span className={row.quantity < 0 ? 'text-terracotta-600 font-black' : 'text-sage-650 font-black'}>
                          {row.type} {row.quantity > 0 ? '+' : ''}{row.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Customer Feedback</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {feedbackRows.slice(0, 6).map((feedback) => (
                    <div key={feedback.id} className="rounded-2xl bg-beige-50 border border-beige-300/30 p-4 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-espresso-950">{feedback.customer?.name || 'Guest'}</span>
                        <span className="font-black text-gold-650">{'★'.repeat(feedback.rating)}</span>
                      </div>
                      <p className="text-[10px] text-espresso-500 mt-1">{feedback.order?.orderNumber} · Table {feedback.order?.tableNumber}</p>
                      {feedback.comment && <p className="mt-2 text-espresso-700 font-semibold">{feedback.comment}</p>}
                    </div>
                  ))}
                  {feedbackRows.length === 0 && <p className="text-xs text-espresso-400">No customer feedback recorded yet.</p>}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Table Occupancy</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                  {tableOccupancy?.tables?.map((table: any) => (
                    <div key={table.tableNumber} className={`rounded-2xl border p-4 ${table.occupied ? 'bg-espresso-950 text-beige-100 border-espresso-950' : 'bg-beige-50 border-beige-300/40 text-espresso-700'}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-black">Table {table.tableNumber}</span>
                        <span className="text-[9px] uppercase font-black">{table.occupied ? table.order?.status : 'Free'}</span>
                      </div>
                      {table.occupied && (
                        <p className="mt-2 text-[10px] font-bold opacity-80">
                          {table.order?.orderNumber} - {formatCurrency(table.order?.total || 0)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Backup & Restore</h3>
                <div className="flex flex-wrap gap-3">
                  <button onClick={handleDownloadBackup} className="px-4 py-2 rounded-full bg-espresso-950 text-beige-100 text-xs font-bold">
                    Download Full Backup
                  </button>
                  <button onClick={handleSaveLocalBackup} className="px-4 py-2 rounded-full bg-sage-500/10 text-sage-650 text-xs font-bold">
                    Save Backup on Server
                  </button>
                  <label className="px-4 py-2 rounded-full bg-beige-100 text-espresso-900 text-xs font-bold cursor-pointer">
                    Restore Menu Catalog
                    <input type="file" accept="application/json" onChange={handleRestoreBackup} className="hidden" />
                  </label>
                </div>
                <p className="text-[10px] text-espresso-500 font-bold">
                  Restore updates categories and menu items only. Customer history and orders stay protected.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'staff' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm flex items-center gap-4">
                  <div className="p-3.5 bg-sage-500/10 text-sage-650 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-espresso-400 uppercase block">On Duty Now</span>
                    <span className="text-xl font-black text-espresso-900">{staffAttendance?.activeCount || 0}</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm">
                  <span className="text-[10px] font-bold text-espresso-400 uppercase block">My Status</span>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-black uppercase ${isStaffCheckedIn(adminUser?.id || '') ? 'bg-sage-500/10 text-sage-650' : 'bg-beige-100 text-espresso-600'}`}>
                    {isStaffCheckedIn(adminUser?.id || '') ? 'Checked In' : 'Checked Out'}
                  </span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-beige-300/30 shadow-sm flex items-center gap-2">
                  <button
                    onClick={() => handleStaffAttendance(adminUser?.id || '', isStaffCheckedIn(adminUser?.id || '') ? 'check-out' : 'check-in')}
                    className="w-full px-4 py-3 rounded-full bg-espresso-950 text-beige-100 text-xs font-bold"
                  >
                    {isStaffCheckedIn(adminUser?.id || '') ? 'Check Out' : 'Check In'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Change My Password</h3>
                  <form onSubmit={handleChangePassword} className="space-y-3 text-xs">
                    <input type="password" placeholder="Current password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input type="password" placeholder="New password, minimum 8 characters" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <button type="submit" className="px-4 py-2 rounded-full bg-espresso-950 text-beige-100 font-bold">Update Password</button>
                  </form>
                </div>

                <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Create Staff Account</h3>
                  <form onSubmit={handleCreateStaff} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <input type="text" placeholder="Full name" value={staffName} onChange={(e) => setStaffName(e.target.value)} className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input type="text" placeholder="Username" value={staffUsername} onChange={(e) => setStaffUsername(e.target.value)} className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <input type="password" placeholder="Password" value={staffPassword} onChange={(e) => setStaffPassword(e.target.value)} className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900" />
                    <select value={staffRole} onChange={(e) => setStaffRole(e.target.value)} className="p-3 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900">
                      {['STAFF', 'MANAGER', 'KITCHEN', 'BAR', 'BILLING', 'ADMIN'].map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                    <button type="submit" className="sm:col-span-2 px-4 py-2 rounded-full bg-espresso-950 text-beige-100 font-bold">Create Account</button>
                  </form>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Staff Directory</h3>
                    <p className="text-xs text-espresso-500 mt-1">Export attendance as employee rows and date columns.</p>
                  </div>
                  <div className="flex flex-wrap items-end gap-2 text-xs">
                    <label className="space-y-1">
                      <span className="block text-[10px] font-black uppercase tracking-wider text-espresso-400">From</span>
                      <input
                        type="date"
                        value={attendanceFrom}
                        onChange={(e) => setAttendanceFrom(e.target.value)}
                        className="p-2 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                      />
                    </label>
                    <label className="space-y-1">
                      <span className="block text-[10px] font-black uppercase tracking-wider text-espresso-400">To</span>
                      <input
                        type="date"
                        value={attendanceTo}
                        onChange={(e) => setAttendanceTo(e.target.value)}
                        className="p-2 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                      />
                    </label>
                    <button
                      onClick={handleDownloadAttendanceCsv}
                      className="px-4 py-2.5 rounded-full bg-espresso-950 text-beige-100 font-bold"
                    >
                      Download CSV
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-beige-300/40 text-[10px] font-bold uppercase text-espresso-400 tracking-wider">
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Username</th>
                        <th className="pb-3">Role</th>
                        <th className="pb-3">Duty</th>
                        <th className="pb-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-beige-100">
                      {staffUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="py-3 font-bold text-espresso-950">{user.name}</td>
                          <td className="py-3 font-semibold text-espresso-600">{user.username}</td>
                          <td className="py-3">
                            <span className="px-2 py-1 rounded-full bg-beige-100 text-espresso-700 font-black text-[10px]">{user.role}</span>
                          </td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full font-black text-[10px] ${isStaffCheckedIn(user.id) ? 'bg-sage-500/10 text-sage-650' : 'bg-beige-100 text-espresso-500'}`}>
                              {isStaffCheckedIn(user.id) ? 'ON DUTY' : 'OFF DUTY'}
                            </span>
                          </td>
                          <td className="py-3 text-right space-x-1">
                            <button
                              onClick={() => handleStaffAttendance(user.id, isStaffCheckedIn(user.id) ? 'check-out' : 'check-in')}
                              className="px-3 py-1 rounded-lg bg-espresso-950 text-beige-100 font-bold"
                            >
                              {isStaffCheckedIn(user.id) ? 'Check Out' : 'Check In'}
                            </button>
                            {user.id !== adminUser?.id && (
                              <button onClick={() => handleDeleteStaff(user.id)} className="px-3 py-1 rounded-lg bg-terracotta-500/10 text-terracotta-600 font-bold">
                                Delete
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-beige-300/30 shadow-sm p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-espresso-400">Today&apos;s Attendance Log</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-beige-300/40 text-[10px] font-bold uppercase text-espresso-400 tracking-wider">
                        <th className="pb-3">Staff</th>
                        <th className="pb-3">Check In</th>
                        <th className="pb-3">Check Out</th>
                        <th className="pb-3 text-right">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-beige-100">
                      {staffAttendance?.shifts?.map((shift: any) => (
                        <tr key={shift.id}>
                          <td className="py-3">
                            <span className="font-bold text-espresso-950 block">{shift.user?.name}</span>
                            <span className="text-[10px] text-espresso-500">{shift.user?.role}</span>
                          </td>
                          <td className="py-3 font-semibold text-espresso-600">{new Date(shift.checkInAt).toLocaleTimeString()}</td>
                          <td className="py-3 font-semibold text-espresso-600">
                            {shift.checkOutAt ? new Date(shift.checkOutAt).toLocaleTimeString() : 'Still on duty'}
                          </td>
                          <td className="py-3 font-black text-espresso-950 text-right">{getShiftDuration(shift)}</td>
                        </tr>
                      ))}
                      {(!staffAttendance?.shifts || staffAttendance.shifts.length === 0) && (
                        <tr>
                          <td colSpan={4} className="py-6 text-center text-espresso-400 font-semibold">
                            No staff check-ins recorded today.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* CATEGORY DIALOG MODAL */}
      {showCatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm" onClick={() => setShowCatModal(false)} />
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-beige-300/30 shadow-2xl relative z-10 space-y-4">
            <h3 className="text-lg font-serif-elegant font-bold text-espresso-950">
              {selectedCat ? 'Edit Category' : 'Create Category'}
            </h3>
            <form onSubmit={handleSaveCategory} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                />
              </div>

              <div>
                <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Lucide Icon name</label>
                <input
                  type="text"
                  required
                  value={catIcon}
                  onChange={(e) => setCatIcon(e.target.value)}
                  className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                />
              </div>

              <div>
                <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Sorting Rank</label>
                <input
                  type="number"
                  required
                  value={catSortOrder}
                  onChange={(e) => setCatSortOrder(parseInt(e.target.value))}
                  className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                />
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowCatModal(false)}
                  className="px-4 py-2 border border-beige-300 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-espresso-950 text-beige-100 font-bold rounded-xl cursor-pointer hover:bg-espresso-900"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MENU ITEM DIALOG MODAL */}
      {showItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm" onClick={() => setShowItemModal(false)} />
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full border border-beige-300/30 shadow-2xl relative z-10 max-h-[85vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-serif-elegant font-bold text-espresso-950">
              {selectedItem ? 'Edit Menu Item' : 'Add Menu Item'}
            </h3>
            
            <form onSubmit={handleSaveMenuItem} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                  />
                </div>
                <div>
                  <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={itemPrice}
                    onChange={(e) => setItemPrice(parseFloat(e.target.value))}
                    className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Description</label>
                <textarea
                  value={itemDesc}
                  onChange={(e) => setItemDesc(e.target.value)}
                  className="w-full h-16 p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Category</label>
                  <select
                    value={itemCatId}
                    onChange={(e) => setItemCatId(e.target.value)}
                    className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Target Queue</label>
                  <select
                    value={itemQueue}
                    onChange={(e) => setItemQueue(e.target.value as any)}
                    className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                  >
                    <option value="KITCHEN">KITCHEN</option>
                    <option value="BAR">BAR (Drinks)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center">
                <label className="flex items-center gap-2 font-bold text-espresso-950 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={itemVeg}
                    onChange={(e) => setItemVeg(e.target.checked)}
                    className="w-4 h-4 rounded border-beige-300 text-espresso-950 focus:ring-0"
                  />
                  Vegetarian Option
                </label>

                <label className="flex items-center gap-2 font-bold text-espresso-950 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={itemAvail}
                    onChange={(e) => setItemAvail(e.target.checked)}
                    className="w-4 h-4 rounded border-beige-300 text-espresso-950 focus:ring-0"
                  />
                  Available In Stock
                </label>
              </div>

              <div className="rounded-2xl bg-beige-50 border border-beige-300/40 p-4 space-y-3">
                <label className="flex items-center gap-2 font-bold text-espresso-950 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={itemTrackStock}
                    onChange={(e) => setItemTrackStock(e.target.checked)}
                    className="w-4 h-4 rounded border-beige-300 text-espresso-950 focus:ring-0"
                  />
                  Track inventory and auto-deduct on orders
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Current Stock</label>
                    <input
                      type="number"
                      min="0"
                      disabled={!itemTrackStock}
                      value={itemStockQty}
                      onChange={(e) => setItemStockQty(e.target.value === '' ? '' : parseInt(e.target.value))}
                      className="w-full p-2.5 bg-white border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">Low Stock Alert</label>
                    <input
                      type="number"
                      min="0"
                      disabled={!itemTrackStock}
                      value={itemLowStockAt}
                      onChange={(e) => setItemLowStockAt(parseInt(e.target.value || '0'))}
                      className="w-full p-2.5 bg-white border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900 disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label className="font-bold text-espresso-400 uppercase tracking-widest block">
                    Add-on customization options
                  </label>
                  <button
                    type="button"
                    onClick={addAddOnRow}
                    className="px-3 py-1.5 rounded-full bg-beige-100 hover:bg-beige-200 text-espresso-900 font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-3 h-3" />
                    Add option
                  </button>
                </div>

                {itemAddOns.length === 0 ? (
                  <div className="rounded-2xl bg-beige-50 border border-beige-300/40 p-3 text-xs font-semibold text-espresso-500">
                    No add-ons. Use Add option for extras like Oat Milk or Extra Shot.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {itemAddOns.map((addOn, index) => (
                      <div key={`add-on-${index}`} className="grid grid-cols-[1fr_110px_auto] gap-2 items-center">
                        <input
                          type="text"
                          value={addOn.name}
                          onChange={(e) => updateAddOnRow(index, 'name', e.target.value)}
                          placeholder="Option name"
                          className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                        />
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={addOn.price}
                          onChange={(e) => updateAddOnRow(index, 'price', e.target.value)}
                          placeholder="Price"
                          className="w-full p-2.5 bg-beige-50 border border-beige-300/60 rounded-xl focus:outline-none focus:border-espresso-900"
                        />
                        <button
                          type="button"
                          onClick={() => removeAddOnRow(index)}
                          className="p-2.5 rounded-xl text-espresso-400 hover:text-terracotta-500 hover:bg-terracotta-500/10"
                          aria-label="Remove add-on"
                          title="Remove add-on"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Base64 Offline image uploader */}
              <div>
                <label className="font-bold text-espresso-400 uppercase tracking-widest block mb-1">
                  Local offline image upload (Base64 file sync)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFile}
                  className="w-full p-2 bg-beige-50 border border-beige-300/60 rounded-xl"
                />
                {itemImage && (
                  <div className="mt-2 shrink-0 w-16 h-16 border border-beige-300 rounded-lg overflow-hidden bg-beige-100 flex items-center justify-center">
                    <img src={itemImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowItemModal(false)}
                  className="px-4 py-2 border border-beige-300 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-espresso-950 text-beige-100 font-bold rounded-xl cursor-pointer hover:bg-espresso-900"
                >
                  Confirm Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
